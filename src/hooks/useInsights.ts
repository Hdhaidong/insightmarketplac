import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type Insight = Tables<"insights">;

export const useInsights = (category: string) => {
  return useQuery({
    queryKey: ["insights", category],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("insights")
        .select("*")
        .eq("category", category as Insight["category"])
        .order("published_date", { ascending: false })
        .limit(6);

      if (error) {
        console.error("Error fetching insights:", error);
        throw error;
      }

      return data;
    },
  });
};

export const useFeaturedInsights = () => {
  return useQuery({
    queryKey: ["insights", "featured"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("insights")
        .select("*")
        .eq("is_featured", true)
        .order("published_date", { ascending: false })
        .limit(5);

      if (error) {
        console.error("Error fetching featured insights:", error);
        throw error;
      }

      return data;
    },
  });
};
