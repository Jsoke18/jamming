import { ChakraProvider, CSSReset, Box, Flex } from "@chakra-ui/react";
import * as React from "react";
import ResultsCard from "./components/results/Results";
import PlaylistCard from "./components/playlist/Playlist";
import { useState } from "react";
import SearchBar from "./components/searchbar/Searchbar"; // Import the Track component

const App = () => {
  const [playlistTracks, setPlaylistTracks] = useState([]); // Tracks in the playlist
  const [playlistTitle, setPlaylistTitle] = useState(""); // Title of the playlist
  const [tracks, setTracks] = useState([
    { id: 1, name: "Song 1", artist: "Artist 1", album: "Album 1" },
    { id: 2, name: "Song 2", artist: "Artist 2", album: "Album 2" },
    { id: 3, name: "Song 3", artist: "Artist 3", album: "Album 3" },
    { id: 4, name: "Song 4", artist: "Artist 4", album: "Album 4" },
    { id: 5, name: "Song 5", artist: "Artist 5", album: "Album 5" },
    { id: 6, name: "Song 6", artist: "Artist 6", album: "Album 6" },
  ]);

  const clearPlaylist = () => {
    setPlaylistTracks([]); // Assuming 'setPlaylistTracks' is your state setter for the tracks
  };

  // Function to handle adding a track to the playlist
  const addToPlaylist = (trackToAdd) => {
    console.log("Adding track:", trackToAdd); // This should log the track object

    setPlaylistTracks((currentPlaylistTracks) => {
      // Check if the track is already in the playlist to avoid duplicates
      if (currentPlaylistTracks.some((track) => track.id === trackToAdd.id)) {
        return currentPlaylistTracks; // Return the current state if the track is already present
      }
      return [...currentPlaylistTracks, trackToAdd]; // Add the new track to the playlist
    });
  };
  const removeFromPlaylist = (trackToRemove) => {
    setPlaylistTracks(currentPlaylistTracks =>
      currentPlaylistTracks.filter(track => track.id !== trackToRemove.id)
    );
  };
  
  return (
    <ChakraProvider>
      <Box marginTop="3%">
        <SearchBar />
      </Box>
      <Flex direction="row" justifyContent="space-around">
        <ResultsCard tracks={tracks} onAddToPlaylist={addToPlaylist} />
        <PlaylistCard
          tracks={playlistTracks}
          playlistTitle={playlistTitle}
          onTitleChange={setPlaylistTitle}
          onClearPlaylist={clearPlaylist}
          onRemoveFromPlaylist={removeFromPlaylist}
        />
      </Flex>
    </ChakraProvider>
  );
};

export default App;