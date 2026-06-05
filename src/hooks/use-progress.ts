import { useEffect, useState, useCallback, useRef } from "react";
import type { User } from "firebase/auth";
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { getDb } from "@/integrations/firebase/client";
import { useAuth } from "./use-auth";

function progressDocId(resourceId: string) {
  return resourceId.replace(/[.#$/\[\]\\:]/g, "_").slice(0, 300);
}

export function useProgress() {
  const { user } = useAuth();
  const [doneIds, setDoneIds] = useState<Set<string>>(new Set());
  const [ready, setReady] = useState(false);
  const unsubscribeRef = useRef<(() => void) | null>(null);
  const userRef = useRef(user);
  userRef.current = user;

  useEffect(() => {
    if (!user) {
      setDoneIds(new Set());
      setReady(true);
      return;
    }

    setReady(false);
    try {
      const db = getDb();
      const progCol = collection(db, "users", user.uid, "progress");

      const unsub = onSnapshot(
        progCol,
        (snapshot) => {
          const ids = new Set<string>();
          snapshot.forEach((d) => {
            const data = d.data();
            if (data.resource_id) ids.add(data.resource_id);
          });
          setDoneIds(ids);
          setReady(true);
        },
        (err) => {
          console.error("[prog] snapshot error:", err);
          setDoneIds(new Set());
          setReady(true);
        }
      );

      unsubscribeRef.current = unsub;
      return unsub;
    } catch (err) {
      console.error("[prog] init error:", err);
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
    (resourceId: string) => {
      const currentUser = userRef.current;
      if (!currentUser) return false;

      let wasDone = false;

      setDoneIds((prev) => {
        const next = new Set(prev);
        wasDone = next.has(resourceId);

        if (wasDone) {
          next.delete(resourceId);
          try {
            const db = getDb();
            const docId = progressDocId(resourceId);
            deleteDoc(doc(db, "users", currentUser.uid, "progress", docId))
              .catch(() => {
                setDoneIds((p) => new Set(p).add(resourceId));
              });
          } catch {
            return prev;
          }
        } else {
          next.add(resourceId);
          try {
            const db = getDb();
            const docId = progressDocId(resourceId);
            setDoc(doc(db, "users", currentUser.uid, "progress", docId), {
              resource_id: resourceId,
              done: true,
              created_at: new Date().toISOString(),
            }).catch(() => {
              setDoneIds((p) => {
                const n = new Set(p);
                n.delete(resourceId);
                return n;
              });
            });
          } catch {
            return prev;
          }
        }

        return next;
      });

      return !wasDone;
    },
    []
  );

  return { doneIds, toggle, isLoggedIn: !!user, ready };
}
