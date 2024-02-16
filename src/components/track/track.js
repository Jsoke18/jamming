import { VStack, Box, Button, Text } from "@chakra-ui/react";

export const Track = ({ track }) => {
    return (
        <Box display="flex" alignItems="center">
            <VStack align="start" spacing={3} mr={6}> 
            <Text fontSize="xl">
                {track.name}
            </Text>
            <Text fontSize="sm"> 
                {track.artist}
            </Text>
            <Text fontSize="sm"> 
               {track.album}
            </Text>
            </VStack>
            <Button colorScheme="blue" size="sm" borderRadius="full" ml={"83%"}>+</Button>
        </Box>
    );
};

