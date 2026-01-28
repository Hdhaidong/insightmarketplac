import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type Insight = Tables<"insights">;

const PAGE_SIZE = 6;

interface UseInsightsOptions {
  category?: string;
  searchQuery?: string;
}

export const useInsights = (category: string, searchQuery?: string) => {
  return useInfiniteQuery({
    queryKey: ["insights", category, searchQuery],
    queryFn: async ({ pageParam = 0 }) => {
      const from = pageParam * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      let query = supabase
        .from("insights")
        .select("*", { count: "exact" })
        .eq("category", category as Insight["category"])
        .order("published_date", { ascending: false });

      // Add search filter if query exists
      if (searchQuery && searchQuery.trim()) {
        const searchTerm = `%${searchQuery.trim()}%`;
        query = query.or(`title.ilike.${searchTerm},description.ilike.${searchTerm}`);
      }

      const { data, error, count } = await query.range(from, to);

      if (error) {
        console.error("Error fetching insights:", error);
        throw error;
      }

      return {
        data: data || [],
        nextPage: data && data.length === PAGE_SIZE ? pageParam + 1 : undefined,
        totalCount: count || 0,
      };
    },
    getNextPageParam: (lastPage) => lastPage?.nextPage ?? undefined,
    initialPageParam: 0,
  });
};

// Global search across all categories
export const useSearchInsights = (searchQuery: string) => {
  return useInfiniteQuery({
    queryKey: ["insights", "search", searchQuery],
    queryFn: async ({ pageParam = 0 }) => {
      const from = pageParam * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      let query = supabase
        .from("insights")
        .select("*", { count: "exact" })
        .order("published_date", { ascending: false });

      // Add search filter if query exists
      if (searchQuery && searchQuery.trim()) {
        const searchTerm = `%${searchQuery.trim()}%`;
        query = query.or(`title.ilike.${searchTerm},description.ilike.${searchTerm}`);
      }

      const { data, error, count } = await query.range(from, to);

      if (error) {
        console.error("Error searching insights:", error);
        throw error;
      }

      return {
        data: data || [],
        nextPage: data && data.length === PAGE_SIZE ? pageParam + 1 : undefined,
        totalCount: count || 0,
      };
    },
    getNextPageParam: (lastPage) => lastPage?.nextPage ?? undefined,
    initialPageParam: 0,
    enabled: !!searchQuery && searchQuery.trim().length > 0,
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
