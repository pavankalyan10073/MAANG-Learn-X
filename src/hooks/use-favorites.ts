import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./use-auth";

export function useFavorites() {
  const { user } = useAuth();
  const [favIds, setFavIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!user) {
      setFavIds(new Set());
      return;
    }
    supabase
      .from("favorites")
      .select("resource_id")
      .eq("user_id", user.uid)
      .then(({ data }) => {
        if (data) setFavIds(new Set(data.map((d) => d.resource_id)));
      });
  }, [user]);

  const toggle = useCallback(
    async (resourceId: string) => {
      if (!user) return false;
      const isFav = favIds.has(resourceId);
      if (isFav) {
        await supabase
          .from("favorites")
          .delete()
          .eq("user_id", user.uid)
          .eq("resource_id", resourceId);
        setFavIds((prev) => {
          const next = new Set(prev);
          next.delete(resourceId);
          return next;
        });
        return false;
      } else {
        await supabase.from("favorites").insert({ user_id: user.uid, resource_id: resourceId });
        setFavIds((prev) => new Set(prev).add(resourceId));
        return true;
      }
    },
    [user, favIds],
  );

  return { favIds, toggle, isLoggedIn: !!user };
}
