import {
  Box,
  Button,
  Card,
  Heading,
  List,
  ListItem,
  Flex,
  Text
} from "@chakra-ui/react";
import { TrackList } from "../tracklist/Tracklist"; // Import the Track component
import SearchBar from "../searchbar/Searchbar"; // Import the Track component

const ResultsCard = ({ tracks, onAddToPlaylist }) => {
  return (
    <Flex justifyContent="center" alignItems="flex-start">
      <Card w="100%" minWidth="300px">
        <Box padding={6}>
          <Heading size="md" textAlign="center">Results</Heading>
          {tracks.length > 0 ? (
            <List mt={2}>
              <TrackList tracks={tracks} onAdd={onAddToPlaylist} context="results" />
            </List>
          ) : (
            <Text textAlign="center" mt={2}>No results to display.</Text>
          )}
        </Box>
      </Card>
    </Flex>
  );
};


export default ResultsCard;