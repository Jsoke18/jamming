import React, { useState } from 'react';
import { VStack, Flex} from "@chakra-ui/react";
import SearchBar from '../searchbar/Searchbar';
import ResultsCard from '../results/Results'; // Adjust the path as needed
import PlaylistCard from '../playlist/Playlist';  // Adjust the path as needed

const MusicControls = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const handleSearchResults = (data) => {
    const results = data.tracks.items.map(track => ({
      id: track.album.id,
      name: track.album.name,
      artist: track.artists.map(artist => artist.name).join(', '),
      album: track.album.name,
      uri: track.uri // Assuming the track object has a 'uri' field
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

  const handleClearPlaylist = () => {
    setPlaylist([]); // Clear the entire playlist
  };
  return (
    <VStack spacing={8}>
      <SearchBar onSearchResults={handleSearchResults} />
      <Flex direction="row" justifyContent="space-evenly" alignItems="flex-start"> {/* Add alignItems="flex-start" */}
        <ResultsCard tracks={searchResults} onAddToPlaylist={handleAddTrack} />
        <PlaylistCard 
          tracks={playlist} 
          onRemoveFromPlaylist={handleRemoveTrack} 
          onClearPlaylist={handleClearPlaylist} 
        />
      </Flex>
    </VStack>
  );
};

export default MusicControls;
