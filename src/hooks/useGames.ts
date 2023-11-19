import { GameQuery } from '../App'
import { useQuery } from '@tanstack/react-query'
import APIClient, { FetchResponse } from '../services/api-client'
import { Platform } from './usePlatforms'

export interface Game {
  id: number
  name: string
  background_image: string
  metacritic: number
  rating_top: number
  parent_platforms: { platform: Platform }[]
}
const apiClient = new APIClient<Game>('/games')

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  })

export default useGames
