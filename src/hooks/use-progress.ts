import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./use-auth";

export function useProgress() {
  const { user } = useAuth();
  const [doneIds, setDoneIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!user) {
      setDoneIds(new Set());
      return;
    }
    supabase
      .from("progress")
      .select("resource_id")
      .eq("user_id", user.uid)
      .then(({ data }) => {
        if (data) setDoneIds(new Set(data.map((d) => d.resource_id)));
      });
  }, [user]);

  const toggle = useCallback(
    async (resourceId: string) => {
      if (!user) return false;
      const isDone = doneIds.has(resourceId);
      if (isDone) {
        await supabase
          .from("progress")
          .delete()
          .eq("user_id", user.uid)
          .eq("resource_id", resourceId);
        setDoneIds((prev) => {
          const next = new Set(prev);
          next.delete(resourceId);
          return next;
        });
        return false;
      } else {
        await supabase.from("progress").insert({ user_id: user.uid, resource_id: resourceId });
        setDoneIds((prev) => new Set(prev).add(resourceId));
        return true;
      }
    },
    [user, doneIds],
  );

  return { doneIds, toggle, isLoggedIn: !!user };
}
