import React, { useState, useEffect } from 'react';
import { Input, InputGroup, InputRightElement, IconButton, Center } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const client_id = '88702172318f409fb685b629e46c25f9'; // Replace with your Spotify client ID
const redirect_uri = 'http://localhost:3000/'; // Your redirect URI
const scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private';
const stateKey = 'spotify_auth_state'; // Key for storing state string in localStorage

// Function to generate a random string for the state parameter
function generateRandomString(length) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

const SearchBar = ({ onSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');

    if (accessToken) {
      console.log('Access Token:', accessToken);
      localStorage.setItem('spotifyAccessToken', accessToken);
      window.location.hash = ''; // Clear the access token from URL
    }
  }, []);

  const handleSearch = async () => {
    let accessToken = localStorage.getItem('spotifyAccessToken');

    if (!accessToken) {
      const state = generateRandomString(16);
      localStorage.setItem(stateKey, state);
      window.location.href = `https://accounts.spotify.com/authorize?response_type=token&client_id=${encodeURIComponent(client_id)}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirect_uri)}&state=${encodeURIComponent(state)}`;
      return;
    }

    if (!searchQuery.trim()) return;

    const endpoint = `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=track,album,artist,playlist&market=US&limit=20`;

    try {
      const response = await fetch(endpoint, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      if (response.status === 401) {
        // Token expired
        console.error('Spotify token expired. Please re-authenticate.');
        localStorage.removeItem('spotifyAccessToken'); // Remove the expired token
        // Prompt user to re-authenticate or automatically redirect to auth page
        return;
      }

      const data = await response.json();
      onSearchResults(data); // Example callback function to handle the search results in the parent component
    } catch (error) {
      console.error('Error searching Spotify:', error);
    }
  };

  return (
    <Center>
      <InputGroup maxW="md">
        <Input
          placeholder="Search Spotify"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <InputRightElement>
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            onClick={handleSearch}
          />
        </InputRightElement>
      </InputGroup>
    </Center>
  );
};

export default SearchBar;
