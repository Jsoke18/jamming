import { Box } from "@chakra-ui/react"; // Import Box from Chakra UI
import { Track } from "../track/track"; // Import the Track component
import React, { useState } from 'react';

export const TrackList = ({ tracks, onAdd, onRemove, context }) => {
  const [playingUrl, setPlayingUrl] = useState('');
  
  const playTrack = (url) => {
      if (url === playingUrl) {
          // If the same track was clicked, pause it
          setPlayingUrl('');
      } else {
          // Play the new track
          setPlayingUrl(url);
      }
  };

  return (
      <Box>
          {tracks.map((track, index) => (
              <Track 
                key={`${track.id}-${index}`} 
                track={track} 
                isPlaying={track.preview_url === playingUrl}
                handlePreview={() => playTrack(track.preview_url)}
                onAdd={onAdd} 
                onRemove={onRemove} 
                context={context} 
              />
          ))}
      </Box>
  );
};