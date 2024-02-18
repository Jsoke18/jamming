import React, { useState } from "react";
import {
  Box, Button, Card, Flex, Input, HStack, VStack, Text,
} from "@chakra-ui/react";

const PlaylistCard = ({ tracks, onRemoveFromPlaylist, onClearPlaylist }) => {
    const [title, setTitle] = useState(""); // Used for the playlist title input
    const [isTitleSet, setIsTitleSet] = useState(false); // New state to track if the title has been set

    const handleSaveToSpotify = () => {
        // Log the playlist title
        console.log("Saving playlist with title:", title);
      
        // Create an array of track URIs
        const trackUris = tracks.map(track => track.uri);
        console.log("Track URIs:", trackUris);
      
        // Here you would send trackUris to Spotify's API to save the playlist
        // For now, just log the URIs to the console
      
        // Reset the playlist title and tracks in the web app
        setTitle(""); // Clear the playlist title
        onClearPlaylist(); // This function should clear the tracks
      };
      
  
    const handleSetTitle = () => { 
        setIsTitleSet(true);
    }
    const handleEditTitle = () => { 
        setIsTitleSet(false);
    }

  return (
    <>
      <Flex justifyContent="center" alignItems="center" marginTop="20%" marginRight="10%">
        <Card w="204%">
          <Box padding={24}>
            <HStack spacing={2} marginBottom="4">
            {!isTitleSet ? (
                <>
                  <Input
                    size="large"
                    placeholder="Enter Playlist Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSetTitle()}
                  />
                  <Button colorScheme="blue" onClick={handleSetTitle}>Set Title</Button>
                </>
              ) : (
                <Text fontSize="2xl" onDoubleClick={handleEditTitle}>{title}</Text>
              )}
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
