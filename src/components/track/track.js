import React, { useState, useRef, useEffect } from 'react';
import { VStack, Box, Button, Text, Spacer, IconButton } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

export const Track = ({ track, onAdd, onRemove, context }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(track.preview_url));

    const handlePreview = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Stop the preview when the component unmounts
    useEffect(() => {
        return () => {
            audioRef.current.pause();
        };
    }, []);

    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" w="full" px={5} py={2}>
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
                aria-label={isPlaying ? 'Stop preview' : 'Play preview'}
            />
            <Button
                colorScheme="blue"
                size="sm"
                minW="50px" // Set a minimum width for buttons
                borderRadius="full"
                onClick={() => (context === "results" ? onAdd(track) : onRemove(track))}
                ml={"10"}
            >
                {context === "results" ? "Add" : "Remove"}
            </Button>
        </Box>
    );
};
