import { Input, InputGroup, InputRightElement, IconButton, Center } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  return (
    <Center>
    <InputGroup maxW="md" >
      <Input placeholder="Search" />
      <InputRightElement>
        <IconButton aria-label="Search" icon={<SearchIcon />} />
      </InputRightElement>
    </InputGroup> 
    </Center>
  );
};

export default SearchBar;