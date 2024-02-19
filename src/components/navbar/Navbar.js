import React from 'react';
import { Flex, Button } from '@chakra-ui/react';
import SearchBar from "../searchbar/Searchbar";

const Navbar = ({ onSearchResults }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      color="white"
      w="100%"
    >
      <Flex flex={1} justify="center">
        <SearchBar onSearchResults={onSearchResults} />
      </Flex>

      <Button
        colorScheme="teal" 
        variant="solid"
        size="md"
        position="absolute"
        right="1rem"
      >
        My Playlists
      </Button>
    </Flex>
  );
};

export default Navbar;
