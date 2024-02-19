import { VStack, Box, Button, Text, Spacer } from "@chakra-ui/react";

export const Track = ({ track, onAdd, onRemove, context }) => {
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" w="full" px={5} py={2}>
        <VStack align="start" spacing={1} flex="1" mt="5">
            <Text fontSize="small" isTruncated fontWeight={"bold"}>
                {track.name}
            </Text>
            <Text fontSize="sm" isTruncated> 
                Artist: {track.artist}
            </Text>
            <Text fontSize="sm" isTruncated> 
               Album: {track.album}
            </Text>
        </VStack>
        <Spacer />
        <Button
            colorScheme="blue"
            size="sm"
            minW="50px" // Set a minimum width for buttons
            borderRadius="full"
            onClick={() => (context === "results" ? onAdd(track) : onRemove(track))}
            ml={"10"}
        >
            {context === "results" ? "Add" : "Remove"}
        </Button>
    </Box>
    );
};
