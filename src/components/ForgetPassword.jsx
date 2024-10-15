import {
  Box,
  Flex,
  Text,
  Avatar,
  IconButton
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const testimonials = [
  {
    name: "Salihu Umar",
    location: "Lagos",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra ultrices sit convallis proin enim consequat non.",
  },
  {
    name: "Salihu Umar",
    location: "Lagos",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra ultrices sit convallis proin enim consequat non.",
  },
  {
    name: "Salihu Umar",
    location: "Lagos",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra ultrices sit convallis proin enim consequat non.",
  },
  {
    name: "Salihu Umar",
    location: "Lagos",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra ultrices sit convallis proin enim consequat non.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Box width="full" maxW="800px" mx="auto" mt={10} position="relative">
      <Text fontSize="2xl" textAlign="center" mb={4}>Testimonials</Text>
      <Text fontSize="md" textAlign="center" mb={6}>Don't just take our words for it, read what people are saying about us.</Text>

      <Flex justifyContent="center" alignItems="center" position="relative">
        {/* Previous Button */}
        <IconButton
          aria-label="Previous"
          icon={<ArrowBackIcon />}
          onClick={prevSlide}
          position="absolute"
          left="-40px"
          zIndex="1"
        />

        {/* Testimonial Slider */}
        <Flex
          overflow="hidden"
          width="100%"
          position="relative"
          height="250px"  // Adjust height based on the content
        >
          <Flex
            transform={`translateX(-${currentIndex * 100}%)`} // Corrected syntax
            transition="transform 0.5s ease-in-out"
            width={`${testimonials.length * 100}%`} // Corrected syntax
          >
            {testimonials.map((testimonial, index) => (
              <Box
                key={index}
                minW="30%"
                p={4}
                textAlign="center"
                borderWidth="1px"
                borderRadius="lg"
                mx={2}
              >
                <Avatar mb={4} />
                <Text fontWeight="bold">{testimonial.name}</Text>
                <Text fontSize="sm" color="gray.500">{testimonial.location}</Text>
                <Text mt={2}>{testimonial.feedback}</Text>
              </Box>
            ))}
          </Flex>
        </Flex>

        {/* Next Button */}
        <IconButton
          aria-label="Next"
          icon={<ArrowForwardIcon />}
          onClick={nextSlide}
          position="absolute"
          right="-40px"
          zIndex="1" // Corrected zIndex
        />
      </Flex>
    </Box>
  );
};

export default Carousel;