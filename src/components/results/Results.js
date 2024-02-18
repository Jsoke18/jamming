import {
  Box,
  Button,
  Card,
  Heading,
  List,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import { TrackList } from "../tracklist/Tracklist"; // Import the Track component
import SearchBar from "../searchbar/Searchbar"; // Import the Track component

const ResultsCard = ({ tracks, onAddToPlaylist }) => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center" marginTop="20%" marginLeft="10%">
        <Card w="204%">
          <Box padding={24}>
            <Heading size="xl">Results</Heading>
            <List mt={2}>
            <TrackList tracks={tracks} onAdd={onAddToPlaylist} context="results" />
            </List>
          </Box>
        </Card>
      </Flex>
    </>
  );
};


export default ResultsCard;
