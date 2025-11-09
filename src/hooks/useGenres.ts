import genres from "@/data/genres";
import type Genre from "@/entities/Genre";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: {
      count: genres.count,
      results: genres.results,
      next: undefined,
    },
  });

export default useGenres;
