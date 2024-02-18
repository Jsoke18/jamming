import { Box } from "@chakra-ui/react"; // Import Box from Chakra UI
import { Track } from "../track/track"; // Import the Track component

export const TrackList = ({ tracks, onAdd, onRemove, context }) => {
  return tracks.map(track => (
    <Box marginBottom={6} key={track.id}> 
      <Track track={track} onAdd={onAdd} onRemove={onRemove} context={context} />
    </Box>
  ));
};
