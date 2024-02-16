import { Box } from "@chakra-ui/react"; // Import Box from Chakra UI
import { Track } from "../track/track"; // Import the Track component

export const TrackList = ({ tracks }) => {
  // Use the map method to render a Track component for each track
  // Wrap each Track component in a Box with a marginBottom prop
  return tracks.map(track => (
    <Box marginBottom={4} key={track.id}> {/* Add the Box component with the marginBottom prop */}
      <Track track={track} />
    </Box>
  ));
};