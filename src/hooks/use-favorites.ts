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

function favDocId(userId: string, url: string) {
  const safe = url.replace(/[.#$/\[\]\\]/g, "_").slice(0, 200);
  return `${userId}_${safe}`;
}

export function useFavorites() {
  const { user } = useAuth();
  const [favUrls, setFavUrls] = useState<Set<string>>(new Set());
  const [ready, setReady] = useState(false);
  const unsubscribeRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!user) {
      setFavUrls(new Set());
      setReady(true);
      return;
    }

    setReady(false);
    try {
      const db = getDb();
      const q = query(
        collection(db, "favorites"),
        where("user_id", "==", user.uid)
      );

      const unsub = onSnapshot(
        q,
        (snapshot) => {
          const urls = new Set<string>();
          snapshot.forEach((d) => {
            const data = d.data();
            const url = data.resource_url || data.resource_id;
            if (url) urls.add(url);
          });
          setFavUrls(urls);
          setReady(true);
        },
        () => {
          setFavUrls(new Set());
          setReady(true);
        }
      );

      unsubscribeRef.current = unsub;
      return unsub;
    } catch {
      setFavUrls(new Set());
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
    async (url: string) => {
      if (!user) return false;

      const db = getDb();
      const isFav = favUrls.has(url);
      const docId = favDocId(user.uid, url);

      if (isFav) {
        try {
          await deleteDoc(doc(db, "favorites", docId));
        } catch {}
        setFavUrls((prev) => {
          const next = new Set(prev);
          next.delete(url);
          return next;
        });
        return false;
      } else {
        try {
          await setDoc(doc(db, "favorites", docId), {
            user_id: user.uid,
            resource_url: url,
            created_at: new Date().toISOString(),
          });
        } catch {}
        setFavUrls((prev) => new Set(prev).add(url));
        return true;
      }
    },
    [user, favUrls]
  );

  const isFavorite = useCallback(
    (url: string) => favUrls.has(url),
    [favUrls]
  );

  return { favIds: favUrls, toggle, isLoggedIn: !!user, ready, isFavorite };
}
