import { useEffect, useState, useCallback, useRef } from "react";
import type { User } from "firebase/auth";
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { getDb } from "@/integrations/firebase/client";
import { useAuth } from "./use-auth";

function progressDocId(userId: string, resourceId: string) {
  const safe = resourceId.replace(/[.#$/\[\]\\]/g, "_");
  return `${userId}_${safe}`;
}

export function useProgress() {
  const { user } = useAuth();
  const [doneIds, setDoneIds] = useState<Set<string>>(new Set());
  const [ready, setReady] = useState(false);
  const unsubscribeRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!user) {
      setDoneIds(new Set());
      setReady(true);
      return;
    }

    setReady(false);
    try {
      const db = getDb();
      const q = query(
        collection(db, "progress"),
        where("user_id", "==", user.uid)
      );

      const unsub = onSnapshot(
        q,
        (snapshot) => {
          const ids = new Set<string>();
          snapshot.forEach((d) => {
            const data = d.data();
            if (data.resource_id) ids.add(data.resource_id);
          });
          setDoneIds(ids);
          setReady(true);
        },
        () => {
          setDoneIds(new Set());
          setReady(true);
        }
      );

      unsubscribeRef.current = unsub;
      return unsub;
    } catch {
      setDoneIds(new Set());
      setReady(true);
    }

    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }
    };
  }, [user]);

  const toggle = useCallback(
    async (resourceId: string) => {
      if (!user) return false;

      const db = getDb();
      const isDone = doneIds.has(resourceId);
      const docId = progressDocId(user.uid, resourceId);

      if (isDone) {
        try {
          await deleteDoc(doc(db, "progress", docId));
        } catch {}
        setDoneIds((prev) => {
          const next = new Set(prev);
          next.delete(resourceId);
          return next;
        });
        return false;
      } else {
        try {
          await setDoc(doc(db, "progress", docId), {
            user_id: user.uid,
            resource_id: resourceId,
            done: true,
            created_at: new Date().toISOString(),
          });
        } catch {}
        setDoneIds((prev) => new Set(prev).add(resourceId));
        return true;
      }
    },
    [user, doneIds]
  );

  return { doneIds, toggle, isLoggedIn: !!user, ready };
}
