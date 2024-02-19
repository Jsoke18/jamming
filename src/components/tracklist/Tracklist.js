import { Box } from "@chakra-ui/react"; // Import Box from Chakra UI
import { Track } from "../track/track"; // Import the Track component

export const TrackList = ({ tracks, onAdd, onRemove, context }) => {
  return (
    <Box>
      {tracks.map((track, index) => (
        // Using a combination of track id and index to ensure uniqueness
        <Track 
          key={`${track.id}-${index}`} 
          track={track} 
          onAdd={onAdd} 
          onRemove={onRemove} 
          context={context} 
        />
      ))}
    </Box>
  );
};