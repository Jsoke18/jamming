import React, { useState } from 'react';
import { Box } from "@chakra-ui/react";
import { Track } from "../track/track";

export const TrackList = ({ tracks, onAdd, onRemove, context }) => {
  const [playingTrack, setPlayingTrack] = useState(null);
  
  const handlePreview = (selectedTrack) => {
    if (playingTrack && playingTrack.id === selectedTrack.id) {
      // If the same track was clicked, pause it
      setPlayingTrack(null);
    } else {
      // Play the new track
      setPlayingTrack(selectedTrack);
    }
  };

  return (
    <Box>
      {tracks.map((track) => (
        <Track 
          key={track.id} 
          track={track} 
          onAdd={onAdd} 
          onRemove={onRemove} 
          context={context}
          isPlaying={playingTrack && playingTrack.id === track.id}
          handlePreview={() => handlePreview(track)}
        />
      ))}
    </Box>
  );
};
