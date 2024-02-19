import SearchBar from "../searchbar/Searchbar";
import { Text, Flex, Spacer } from "@chakra-ui/react"; // Import Spacer

const Navbar = () => { 
    return ( 
        <Flex justifyContent="center" alignItems="center">
            <SearchBar />
            <Text fontSize="large" alignSelf="flex-start">My Playlists</Text> {/* Use alignSelf to align the text at the top */}
        </Flex>
    )
}

export default Navbar;