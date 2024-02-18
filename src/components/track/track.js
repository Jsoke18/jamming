import { VStack, Box, Button, Text } from "@chakra-ui/react";

export const Track = ({ track, onAdd, onRemove, context }) => {
    return (
        <Box display="flex" alignItems="center" w="full" px={5} mt={5}>
            <VStack align="start" spacing={6} flex="1"> 
                <Text fontSize="xl" isTruncated>
                    {track.name}
                </Text>
                <Text fontSize="sm"> 
                    {track.artist}
                </Text>
                <Text fontSize="sm"> 
                   {track.album}
                </Text>
            </VStack>
            {context === "results" && (
                <Button colorScheme="blue" size="sm" borderRadius="full" onClick={() => onAdd(track)}>Add</Button>
            )}
            {context === "playlist" && (
                <Button colorScheme="red" size="sm" borderRadius="full" onClick={() => onRemove(track)}>Remove</Button>
            )}
        </Box>
    );
};
