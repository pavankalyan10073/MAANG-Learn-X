import { useState, useCallback, useRef, useEffect } from "react";
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

const WISHLIST_STORAGE_KEY = "wishlist_ids";
const WISHLIST_META_KEY = "wishlist_meta";

function urlToDocId(url: string) {
  return url
    .replace(/[.#$/\[\]\\:]/g, "_")
    .replace(/%/g, "_pct_")
    .slice(0, 300);
}

function readStorage(): { ids: Set<string>; meta: Record<string, WishlistItem> } {
  try {
    const idsRaw = localStorage.getItem(WISHLIST_STORAGE_KEY);
    const metaRaw = localStorage.getItem(WISHLIST_META_KEY);
    if (idsRaw && metaRaw) {
      const ids = new Set<string>(JSON.parse(idsRaw));
      const meta = JSON.parse(metaRaw);
      return { ids, meta };
    }
  } catch {
    // ignore
  }
  return { ids: new Set<string>(), meta: {} };
}

function writeStorage(ids: Set<string>, meta: Record<string, WishlistItem>) {
  try {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify([...ids]));
    localStorage.setItem(WISHLIST_META_KEY, JSON.stringify(meta));
  } catch {
    // ignore
  }
}

export interface WishlistItem {
  url: string;
  title?: string;
  created_at: string;
}

export function useWishlist() {
  const { user } = useAuth();
  const initialData = readStorage();
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(initialData.ids);
  const [wishlistMeta, setWishlistMeta] = useState<Record<string, WishlistItem>>(initialData.meta);
  const [ready] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userRef = useRef<User | null>(null);
  const lastUserActionRef = useRef<number>(0);
  const idsRef = useRef<Set<string>>(initialData.ids);
  const metaRef = useRef<Record<string, WishlistItem>>(initialData.meta);
  userRef.current = user;
  idsRef.current = wishlistIds;
  metaRef.current = wishlistMeta;

  useEffect(() => {
    setIsLoggedIn(user != null);

    if (!user) {
      return;
    }

    const db = getDb();
    const wishCol = collection(db, "users", user.uid, "wishlist");
    const q = query(wishCol, orderBy("created_at", "desc"));

    const unsub = onSnapshot(
      q,
      (snapshot) => {
        const now = Date.now();
        if (now - lastUserActionRef.current < 2000) {
          return;
        }
        const ids = new Set<string>();
        const meta: Record<string, WishlistItem> = {};
        snapshot.forEach((d) => {
          const data = d.data() as WishlistItem;
          if (data.url) {
            ids.add(data.url);
            meta[data.url] = data;
          }
        });

        setWishlistIds((prev) => {
          const next = new Set(prev);
          let changed = false;
          next.clear();
          ids.forEach((id) => {
            if (!prev.has(id)) changed = true;
            next.add(id);
          });
          if (!changed && next.size === prev.size) return prev;
          idsRef.current = next;
          writeStorage(next, meta);
          return next;
        });
        setWishlistMeta((prev) => {
          let changed = false;
          const next = { ...prev };
          Object.keys(next).forEach((k) => delete next[k]);
          Object.entries(meta).forEach(([k, v]) => {
            if (prev[k]?.created_at !== v.created_at) changed = true;
            next[k] = v;
          });
          if (!changed && Object.keys(next).length === Object.keys(prev).length) return prev;
          metaRef.current = next;
          return next;
        });
      },
      (err) => {
        console.error("[wishlist] snapshot error:", err);
      }
    );

    return () => unsub();
  }, [user?.uid]);

  const addToWishlist = useCallback(
    (url: string, title?: string) => {
      lastUserActionRef.current = Date.now();
      const newItem: WishlistItem = { url, title, created_at: new Date().toISOString() };

      setWishlistIds((prev) => {
        if (prev.has(url)) return prev;
        const next = new Set([...prev, url]);
        const nextMeta = { ...metaRef.current, [url]: newItem };
        writeStorage(next, nextMeta);
        metaRef.current = nextMeta;
        return next;
      });
      setWishlistMeta((prev) => {
        if (prev[url]) return prev;
        const next = { ...prev, [url]: newItem };
        return next;
      });

      const currentUser = userRef.current;
      if (!currentUser) return;

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
      ).catch(() => {});
    },
    []
  );

  const removeFromWishlist = useCallback((url: string) => {
    lastUserActionRef.current = Date.now();

    setWishlistIds((prev) => {
      if (!prev.has(url)) return prev;
      const next = new Set(prev);
      next.delete(url);
      const nextMeta = { ...metaRef.current };
      delete nextMeta[url];
      writeStorage(next, nextMeta);
      metaRef.current = nextMeta;
      return next;
    });
    setWishlistMeta((prev) => {
      if (!prev[url]) return prev;
      const next = { ...prev };
      delete next[url];
      return next;
    });

    const currentUser = userRef.current;
    if (currentUser) {
      const db = getDb();
      const docId = urlToDocId(url);
      deleteDoc(doc(db, "users", currentUser.uid, "wishlist", docId)).catch(() => {});
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