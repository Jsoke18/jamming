import SearchBar from "../searchbar/Searchbar"; // Import the Track component

const Navbar = ({ onSearchResults }) => {
  // Accept the onSearchResults prop
  return (
    <>
      <SearchBar onSearchResults={onSearchResults} /> 

    </>
  );
};

export default Navbar;
