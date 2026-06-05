import { useEffect, useState, useCallback, useRef } from "react";
import type { User } from "firebase/auth";
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { getDb } from "@/integrations/firebase/client";
import { useAuth } from "./use-auth";

function urlToDocId(url: string) {
  return url
    .replace(/[.#$/\[\]\\:]/g, "_")
    .replace(/%/g, "_pct_")
    .slice(0, 300);
}

export interface WishlistItem {
  url: string;
  title?: string;
  created_at: string;
}

export function useWishlist() {
  const { user } = useAuth();
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(new Set());
  const [wishlistMeta, setWishlistMeta] = useState<Record<string, WishlistItem>>({});
  const [ready, setReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const unsubscribeRef = useRef<(() => void) | null>(null);
  const userRef = useRef<User | null>(null);
  userRef.current = user;

  useEffect(() => {
    if (!user) {
      setWishlistIds(new Set());
      setWishlistMeta({});
      setReady(true);
      setIsLoggedIn(false);
      return;
    }

    setIsLoggedIn(true);
    setReady(false);

    try {
      const db = getDb();
      const wishCol = collection(db, "users", user.uid, "wishlist");
      const q = query(wishCol, orderBy("created_at", "desc"));

      const unsub = onSnapshot(
        q,
        (snapshot) => {
          const ids = new Set<string>();
          const meta: Record<string, WishlistItem> = {};
          snapshot.forEach((d) => {
            const data = d.data() as WishlistItem;
            if (data.url) {
              ids.add(data.url);
              meta[data.url] = data;
            }
          });
          setWishlistIds(ids);
          setWishlistMeta(meta);
          setReady(true);
        },
        (err) => {
          console.error("[wishlist] snapshot error:", err);
          setWishlistIds(new Set());
          setWishlistMeta({});
          setReady(true);
        }
      );

      unsubscribeRef.current = unsub;
      return () => {
        unsub();
        unsubscribeRef.current = null;
      };
    } catch (err) {
      console.error("[wishlist] init error:", err);
      setWishlistIds(new Set());
      setWishlistMeta({});
      setReady(true);
    }
  }, [user?.uid]);

  const addToWishlist = useCallback(
    (url: string, title?: string) => {
      const currentUser = userRef.current;
      if (!currentUser) return;

      // Optimistic update
      setWishlistIds((prev) => {
        if (prev.has(url)) return prev;
        const next = new Set(prev);
        next.add(url);
        return next;
      });
      setWishlistMeta((prev) => {
        if (prev[url]) return prev;
        return {
          ...prev,
          [url]: { url, title, created_at: new Date().toISOString() },
        };
      });

      try {
        const db = getDb();
        const docId = urlToDocId(url);
        setDoc(
          doc(db, "users", currentUser.uid, "wishlist", docId),
          {
            url,
            title: title || "",
            created_at: new Date().toISOString(),
          },
          { merge: true }
        ).catch(() => {
          setWishlistIds((prev) => {
            const next = new Set(prev);
            next.delete(url);
            return next;
          });
          setWishlistMeta((prev) => {
            const next = { ...prev };
            delete next[url];
            return next;
          });
        });
      } catch {
        setWishlistIds((prev) => {
          const next = new Set(prev);
          next.delete(url);
          return next;
        });
        setWishlistMeta((prev) => {
          const next = { ...prev };
          delete next[url];
          return next;
        });
      }
    },
    []
  );

  const removeFromWishlist = useCallback((url: string) => {
    const currentUser = userRef.current;
    if (!currentUser) return;

    // Optimistic update
    setWishlistIds((prev) => {
      if (!prev.has(url)) return prev;
      const next = new Set(prev);
      next.delete(url);
      return next;
    });
    setWishlistMeta((prev) => {
      if (!prev[url]) return prev;
      const next = { ...prev };
      delete next[url];
      return next;
    });

    try {
      const db = getDb();
      const docId = urlToDocId(url);
      deleteDoc(doc(db, "users", currentUser.uid, "wishlist", docId)).catch(
        () => {
          setWishlistIds((prev) => new Set(prev).add(url));
        }
      );
    } catch {
      setWishlistIds((prev) => new Set(prev).add(url));
    }
  }, []);

  const isInWishlist = useCallback(
    (url: string) => wishlistIds.has(url),
    [wishlistIds]
  );

  return {
    wishlistIds,
    wishlistMeta,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    isLoggedIn,
    ready,
  };
}
