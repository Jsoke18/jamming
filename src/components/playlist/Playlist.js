import React, { useState } from "react";
import {
  Box, Button, Card, Flex, Input, HStack, VStack, Text,
} from "@chakra-ui/react";

const PlaylistCard = ({ tracks, onRemoveFromPlaylist, onClearPlaylist }) => {
    const [title, setTitle] = useState(""); // Used for the playlist title input
  
    const handleSaveToSpotify = () => {
      console.log("Saving playlist with title:", title);
      console.log("Tracks:", tracks);
      setTitle(""); // Clear the title state
      onClearPlaylist(); // Assume this clears the playlist in App.js
    };
  
  return (
    <>
      <Flex justifyContent="center" alignItems="center" marginTop="20%" marginRight="10%">
        <Card w="204%">
          <Box padding={24}>
            <HStack spacing={2} marginBottom="4">
              <Input
                size="large"
                placeholder="Enter Playlist Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Button colorScheme="blue" onClick={() => setTitle('')}>Set Title</Button> 
            </HStack>
            {tracks.length > 0 && (
              <VStack spacing={4}>
                {tracks.map((track) => (
                  <Box key={track.id} p={2} shadow="md" borderWidth="1px" display="flex" justifyContent="space-between" alignItems="center">
                    <VStack align="start">
                      <Text fontWeight="bold">{track.name}</Text>
                      <Text>{track.artist}</Text>
                      <Text>{track.album}</Text>
                    </VStack>
                    <Button colorScheme="red" size="sm" onClick={() => onRemoveFromPlaylist(track)}>Remove</Button>
                  </Box>
                ))}
              </VStack>
            )}
            <Button mt={4} colorScheme="blue" onClick={handleSaveToSpotify}>
              Save To Spotify
            </Button>
          </Box>
        </Card>
      </Flex>
    </>
  );
};

export default PlaylistCard;
