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
        const trackUris = tracks.map(track => ({
          name: track.name,
          artist: track.artist,
          album: track.album,
          url: track.uri
        }));
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
      <Flex justifyContent="center" alignItems="center" p={5}>
        <Card width="full" maxWidth="500px" bg="white" p={5} boxShadow="xl" borderRadius="lg">
          <VStack spacing={4} align="stretch">
            {isTitleSet ? (
              <Text fontSize="2xl" onDoubleClick={handleEditTitle}>{title}</Text>
            ) : (
              <HStack>
                <Input
                  placeholder="Enter Playlist Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  size="md"
                />
                <Button colorScheme="blue" onClick={handleSetTitle}>Set Title</Button>
              </HStack>
            )}
            {tracks.length > 0 ? (
              tracks.map((track) => (
                <HStack key={track.id} justifyContent="space-between" alignItems="center" p={2} borderWidth="1px" borderRadius="lg">
                  <VStack align="start" spacing={0} overflow="hidden">
                    <Text fontWeight="bold" isTruncated>{track.name}</Text>
                    <Text fontSize="sm" isTruncated>{track.artist}</Text>
                    <Text fontSize="sm" isTruncated>{track.album}</Text>
                  </VStack>
                  <Button colorScheme="red" size="sm" onClick={() => onRemoveFromPlaylist(track)}>Remove</Button>
                </HStack>
              ))
            ) : (
              <Text>No tracks in playlist.</Text>
            )}
            <Button mt={4} colorScheme="blue" onClick={handleSaveToSpotify} isFullWidth>
              Save To Spotify
            </Button>
          </VStack>
        </Card>
      </Flex>
    );
};
export default PlaylistCard;
