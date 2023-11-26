import { Genre } from './Genre'
import { Platform } from './Platform'
import { Publisher } from './Publisher'

export interface Game {
  id: number
  name: string
  slug: string
  background_image: string
  metacritic: number
  rating_top: number
  description_raw: string
  genres: Genre[]
  publishers: Publisher[]
  parent_platforms: { platform: Platform }[]
}
