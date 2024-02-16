import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";
import * as React from "react";
import ResultsCard from "./components/results/Results";
import { useState } from "react";
import  SearchBar  from "./components/searchbar/Searchbar"; // Import the Track component

function App() {
  const [tracks, setTracks] = useState([
    { id: 1, name: "Song 1", artist: "Artist 1", album: "Album 1" },
    { id: 2, name: "Song 2", artist: "Artist 2", album: "Album 2" },
    { id: 1, name: "Song 3", artist: "Artist 3", album: "Album 3" },
    { id: 2, name: "Song 4", artist: "Artist 4", album: "Album 4" },
    { id: 1, name: "Song 5", artist: "Artist 5", album: "Album 5" },
    { id: 2, name: "Song 6", artist: "Artist 6", album: "Album 6" },

  ]);

  return (
    
    <div className="App">
      <ChakraProvider>
      <Box marginTop="3%">
        <SearchBar />
      </Box>
        <ResultsCard tracks={tracks} />;
      </ChakraProvider>
    </div>
  );
}

export default App;
