import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames.ts'
import GameCards from './GameCard.tsx';
import GameCardSkeleton from './GameCardSkeleton.tsx';
import GameCardContainer from './GameCardContainer.tsx';

export const GameGrid = () => {
    const { data, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={'10px'} padding={'20px'}>
                {isLoading && skeletons.map(skeleton => <GameCardContainer><GameCardSkeleton key={skeleton} /></GameCardContainer>)}
                {data.map(game => <GameCardContainer><GameCards key={game.id} game={game} /></GameCardContainer>)}
            </SimpleGrid>
        </>
    )
}
