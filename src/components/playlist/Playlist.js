import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Flex,
  Input,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
const PlaylistCard = ({ tracks, onRemoveFromPlaylist, onClearPlaylist }) => {
  const [title, setTitle] = useState(""); // Used for the playlist title input
  const [isTitleSet, setIsTitleSet] = useState(false); // New state to track if the title has been set
  const toast = useToast();

  const handleSaveToSpotify = async () => {
    // Retrieve the access token from localStorage

    const accessToken = localStorage.getItem("spotifyAccessToken");
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };

    try {
      // Step 1: Get the User's ID
      const userProfileResponse = await fetch("https://api.spotify.com/v1/me", {
        headers,
      });
      const userProfile = await userProfileResponse.json();
      if (userProfileResponse.status === 401) {
        throw new Error("Spotify token expired. Please re-authenticate.");
      }
      const userId = userProfile.id;

      // Step 2: Create a New Playlist
      const createPlaylistResponse = await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        {
          method: "POST",
          headers,
          body: JSON.stringify({
            name: title, // Use the title from your state
            description: "My playlist description", // You can customize this
            public: false, // Set to true if you want the playlist to be public
          }),
        }
      );

      if (createPlaylistResponse.status !== 201) {
        throw new Error("Failed to create playlist.");
      }

      const playlistData = await createPlaylistResponse.json();
      const playlistId = playlistData.id;

      // Step 3: Add Tracks to the Playlist
      const trackUris = tracks.map((track) => track.uri); // Ensure you're getting the correct track URIs
      const addTracksResponse = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          method: "POST",
          headers,
          body: JSON.stringify({ uris: trackUris }),
        }
      );

      if (addTracksResponse.status !== 201) {
        throw new Error("Failed to add tracks to playlist.");
      }

      console.log(`Playlist created with ID: ${playlistId}`);
      setTitle("");
      onClearPlaylist();
      // Show a success toast
      toast({
        title: "Playlist created.",
        description: `Playlist "${title}" created with ID: ${playlistId}`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      console.error("Error during Spotify operations:", error);
      // Show an error toast
      toast({
        title: "An error occurred.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleSetTitle = () => {
    setIsTitleSet(true);
  };
  const handleEditTitle = () => {
    setIsTitleSet(false);
  };

  return (
    <Flex justifyContent="center" alignItems="center" pl={5}>
      <Card
        width="full"
        maxWidth="500px"
        bg="white"
        p={5}
        boxShadow="xl"
        borderRadius="lg"
      >
        <VStack spacing={4} align="stretch">
          {isTitleSet ? (
            <Text fontSize="2xl" onDoubleClick={handleEditTitle}>
              {title}
            </Text>
          ) : (
            <HStack>
              <Input
                placeholder="Enter Playlist Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                size="md"
              />
              <Button colorScheme="blue" onClick={handleSetTitle}>
                Set Title
              </Button>
            </HStack>
          )}
          {tracks.length > 0 ? (
            tracks.map((track) => (
              <HStack
                key={track.id}
                justifyContent="space-between"
                alignItems="center"
                p={2}
                borderWidth="1px"
                borderRadius="lg"
              >
                <VStack align="start" spacing={0} overflow="hidden">
                  <Text fontWeight="bold" isTruncated>
                    {track.name}
                  </Text>
                  <Text fontSize="sm" isTruncated>
                    {track.artist}
                  </Text>
                  <Text fontSize="sm" isTruncated>
                    {track.album}
                  </Text>
                </VStack>
                <Button
                  colorScheme="red"
                  size="sm"
                  onClick={() => onRemoveFromPlaylist(track)}
                >
                  Remove
                </Button>
              </HStack>
            ))
          ) : (
            <Text>No tracks in playlist.</Text>
          )}
          <Button
            mt={4}
            colorScheme="blue"
            onClick={handleSaveToSpotify}
            isFullWidth
          >
            Save To Spotify
          </Button>
        </VStack>
      </Card>
    </Flex>
  );
};
export default PlaylistCard;
