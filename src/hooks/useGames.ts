import type Game from "@/entities/Game";
import APIClient, { type FetchResponse } from "@/services/api-client";
import useGameQueryStore from "@/store";
import { useInfiniteQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          search: gameQuery.searchText,
          ordering: gameQuery.sortOrder,
          parent_platform: gameQuery.platformId,
          genres: gameQuery.genreId,
          page: pageParam,
        },
      }),
    initialPageParam: 1, //! React Query v5 gerekli
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 saat
  });
};

export default useGames;
