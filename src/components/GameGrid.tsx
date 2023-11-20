import { SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { GameQuery } from '../App.tsx'
import useGames from '../hooks/useGames.ts'
import GameCards from './GameCard.tsx'
import GameCardContainer from './GameCardContainer.tsx'
import GameCardSkeleton from './GameCardSkeleton.tsx'

interface Props {
  gameQuery: GameQuery
}

export const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  if (error) return <Text>{error.message}</Text>

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0
  return (
    <InfiniteScroll
      next={() => fetchNextPage()}
      loader={<Spinner />}
      hasMore={!!hasNextPage}
      dataLength={fetchedGamesCount}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding={'20px'}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCards game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  )
}
