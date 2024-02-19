import React, { useState } from 'react';
import { Box, VStack } from "@chakra-ui/react";
import SearchBar from '../searchbar/Searchbar'; // Adjust the path as needed
import { TrackList }  from '../tracklist/Tracklist'; // Adjust the path as needed

const MusicControls = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const handleSearchResults = (data) => {
    // Transform the search result data into the format expected by your Track and TrackList components
    // Assuming data.tracks.items is the array of tracks from Spotify's response
    const results = data.tracks.items.map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists.map(artist => artist.name).join(', '),
      album: track.album.name,
    }));
    setSearchResults(results);
  };

  const handleAddTrack = (track) => {
    if (!playlist.find(pTrack => pTrack.id === track.id)) {
      setPlaylist([...playlist, track]);
    }
  };

  const handleRemoveTrack = (track) => {
    setPlaylist(playlist.filter(pTrack => pTrack.id !== track.id));
  };

  return (
    <VStack spacing={8}>
      <SearchBar onSearchResults={handleSearchResults} />
      <Box>
        <h2>Search Results</h2>
        <TrackList tracks={searchResults} onAdd={handleAddTrack} context="results" />
      </Box>
      <Box>
        <h2>Playlist</h2>
        <TrackList tracks={playlist} onRemove={handleRemoveTrack} context="playlist" />
      </Box>
    </VStack>
  );
};

export default MusicControls;
