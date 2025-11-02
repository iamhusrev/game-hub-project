import type { GameQuery } from "@/App";
import APIClient, { type FetchResponse } from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          search: gameQuery.searchText,
          ordering: gameQuery.sortOrder,
          parent_platform: gameQuery.platform?.id,
          genres: gameQuery.genre?.id,
          page: pageParam,
        },
      }),
    initialPageParam: 1, //! React Query v5 gerekli
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
