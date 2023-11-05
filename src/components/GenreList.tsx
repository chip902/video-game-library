import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
    const { data, isLoading, error } = useGenres();
    if (error) return null;
    if (isLoading) return <Spinner />;
    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id}>
                    <HStack padding={"5px"}>
                        <Image borderRadius={8} boxSize="32px" src={getCroppedImageUrl(genre.image_background)} />
                        <Text fontSize="lg">{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    )
}

export default GenreList