import React, { useEffect, useRef } from "react";
import { VStack, Box, Button, Text, Spacer, IconButton } from "@chakra-ui/react";
import { FaPlay, FaPause } from "react-icons/fa";

export const Track = ({
  track,
  onAdd,
  onRemove,
  context,
  isPlaying,
  handlePreview,
}) => {
  const audioRef = useRef(null);

  useEffect(() => {
    // If there is a preview URL, create a new Audio object
    if (track.preview_url) {
      audioRef.current = new Audio(track.preview_url);
    }

    // Cleanup function to pause and dereference the audio
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [track.preview_url]);

  useEffect(() => {
    // Play or pause the audio when isPlaying changes, if a preview URL exists
    if (track.preview_url) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current?.pause();
      }
    }
  }, [isPlaying, track.preview_url]);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      w="full"
      px={5}
      py={2}
    >
      <VStack align="start" spacing={1} flex="1" mt="5">
        <Text fontSize="small" isTruncated fontWeight={"bold"}>
          {track.name}
        </Text>
        <Text fontSize="sm" isTruncated>
          Artist: {track.artist}
        </Text>
        <Text fontSize="sm" isTruncated>
          Album: {track.album}
        </Text>
      </VStack>
      <Spacer />
      <IconButton
        icon={isPlaying ? <FaPause /> : <FaPlay />}
        onClick={handlePreview}
        size="sm"
        aria-label={isPlaying ? "Pause preview" : "Play preview"}
        isDisabled={!track.preview_url} // Disable the button if preview_url is null
      />
      <Button
        colorScheme="blue"
        size="sm"
        minW="50px"
        borderRadius="full"
        onClick={() => (context === "results" ? onAdd(track) : onRemove(track))}
        ml={"10"}
      >
        {context === "results" ? "Add" : "Remove"}
      </Button>
    </Box>
  );
};
