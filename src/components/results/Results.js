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

const ResultsCard = ({ tracks }) => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center" marginTop="20%">
        <Card w="50%">
          <Box p={4}>
            <Heading size="xl">Results</Heading>
            <List mt={2}>
            <TrackList tracks={tracks} />;
              {/* Add more songs here */}
            </List>
            <Button mt={10} colorScheme="blue">
              Save To Spotify
            </Button>
          </Box>
        </Card>
      </Flex>
    </>
  );
};

export default ResultsCard;
