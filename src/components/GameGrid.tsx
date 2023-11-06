import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames.ts'
import GameCards from './GameCard.tsx';
import GameCardSkeleton from './GameCardSkeleton.tsx';
import GameCardContainer from './GameCardContainer.tsx';
import { GameQuery } from '../App.tsx';

interface Props {
    gameQuery: GameQuery;
}

export const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={'12px'} padding={'20px'}>
                {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton} ><GameCardSkeleton /></GameCardContainer>)}
                {data.map(game => <GameCardContainer key={game.id}><GameCards game={game} /></GameCardContainer>)}
            </SimpleGrid>
        </>
    )
}
