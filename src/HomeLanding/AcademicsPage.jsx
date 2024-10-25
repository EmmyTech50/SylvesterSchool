import {
  Box, Text, IconButton, Stack, Button, Flex, HStack, Divider, VStack, Grid
} from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import NavBar from '../CommonPart/NavBar';
import Footer from '../CommonPart/Footer';
import React, { useState } from "react";
import { variables } from '../App';
import baby$book from '../assets/baby$book.png';

const Data = [
  {
    title: "Lower Primary School",
    subtitle: "Year 1 to 3 (Grade 1 to 3)\nAges 5 to 7",
    subjects: {
      "Core Academic Subjects": ["Numeracy", "Quantitative Reasoning", "Grammar", "Handwriting", "Comprehension & Poetry"],
      "Science and Technology": ["Basic Science", "Basic Science and Tech", "Computer Studies"],
      "Social and Cultural Studies": ["French", "Social Studies", "Language", "Christian Religious Knowledge"],
      "Creative and Performing Arts": ["Music", "Fine Art", "Diction"],
      "Home and Practical Skills": ["Home Economics"]
    }
  },
  {
    title: "Lower Primary School",
    subtitle: "Year 1 to 3 (Grade 1 to 3)\nAges 5 to 7",
    subjects: {
      "Core Academic Subjects": ["Numeracy", "Quantitative Reasoning", "Grammar", "Handwriting", "Comprehension & Poetry"],
      "Science and Technology": ["Basic Science", "Basic Science and Tech", "Computer Studies"],
      "Social and Cultural Studies": ["French", "Social Studies", "Language", "Christian Religious Knowledge"],
      "Creative and Performing Arts": ["Music", "Fine Art", "Diction"],
      "Home and Practical Skills": ["Home Economics"]
    }
  },
  {
    title: "Lower Primary School",
    subtitle: "Year 1 to 3 (Grade 1 to 3)\nAges 5 to 7",
    subjects: {
      "Core Academic Subjects": ["Numeracy", "Quantitative Reasoning", "Grammar", "Handwriting", "Comprehension & Poetry"],
      "Science and Technology": ["Basic Science", "Basic Science and Tech", "Computer Studies"],
      "Social and Cultural Studies": ["French", "Social Studies", "Language", "Christian Religious Knowledge"],
      "Creative and Performing Arts": ["Music", "Fine Art", "Diction"],
      "Home and Practical Skills": ["Home Economics"]
    }
  },
  {
    title: "Lower Primary School",
    subtitle: "Year 1 to 3 (Grade 1 to 3)\nAges 5 to 7",
    subjects: {
      "Core Academic Subjects": ["Numeracy", "Quantitative Reasoning", "Grammar", "Handwriting", "Comprehension & Poetry"],
      "Science and Technology": ["Basic Science", "Basic Science and Tech", "Computer Studies"],
      "Social and Cultural Studies": ["French", "Social Studies", "Language", "Christian Religious Knowledge"],
      "Creative and Performing Arts": ["Music", "Fine Art", "Diction"],
      "Home and Practical Skills": ["Home Economics"]
    }
  },
  {
    title: "Lower Primary School",
    subtitle: "Year 1 to 3 (Grade 1 to 3)\nAges 5 to 7",
    subjects: {
      "Core Academic Subjects": ["Numeracy", "Quantitative Reasoning", "Grammar", "Handwriting", "Comprehension & Poetry"],
      "Science and Technology": ["Basic Science", "Basic Science and Tech", "Computer Studies"],
      "Social and Cultural Studies": ["French", "Social Studies", "Language", "Christian Religious Knowledge"],
      "Creative and Performing Arts": ["Music", "Fine Art", "Diction"],
      "Home and Practical Skills": ["Home Economics"]
    }
  },
  {
    title: "Upper Primary School",
    subtitle: "Year 4 to 6 (Grade 4 to 6)\nAges 8 to 11",
    subjects: {
      "Core Academic Subjects": ["Advanced Numeracy", "Advanced Grammar", "Essay Writing"],
      "Science and Technology": ["Physics", "Chemistry", "Computer Studies"],
      "Social and Cultural Studies": ["Geography", "World History"],
      "Creative and Performing Arts": ["Drama", "Painting"],
      "Home and Practical Skills": ["Cooking"]
    }
  }
];

function AcademicsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex === 0) ? Data.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex === ( Data.length - 1) ) ? 0 : currentIndex + 1);
  };

  return (
    <Box bg={variables.primaryColor2}>
      <NavBar />
      <Box
        bgImage={baby$book}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        minH="80vh"
        position="relative"
      >
        <Box
          height="100vh"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          color="#fff"
          fontSize={{ base: '30px', md: '50px' }}
        >
          <Text >Ignite Your Curiosity and Achieve Excellence</Text>
          <Text >Sylvester Standard High Academics</Text>
        </Box>
      </Box>

      <Box  mx="auto" position="relative">
        <Flex justifyContent="center" alignItems="center" position="relative" w="100%">
        {/* Previous Button */}
        <IconButton
          aria-label="Previous"
          icon={<ArrowBackIcon color={variables.primaryColor1} />}
          onClick={prevSlide}
          bg={variables.primaryColor2}
          zIndex="1"
          size={{ base: 'sm', md: 'md' }} // Adjust button size for mobile
        />

        <Flex
          overflow="hidden"
          width="100%"
          position="relative"
          minH="50vh"
          alignItems="center"
          justifyContent="center"
        >
          {/* Carousel Wrapper */}
          <Flex
            transform={`translateX(-${currentIndex * 100}%)`}
            transition="transform 1s ease-in-out"
            width="100%"
          >
            {Data.map((item, index) => (
              <Box
                key={index}
                w="100%" // Make each slide full-width on mobile
                p={{ base: 2, md: 4 }} // Adjust padding for mobile
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                {/* Title */}
                <Text
                  fontSize={{ base: 'lg', md: '2xl' }} // Responsive text size
                  fontWeight="bold"
                  color={variables.primaryColor1}
                  textAlign="center"
                >
                  {item.title}
                </Text>

                {/* Subtitle */}
                <Text
                  fontSize={{ base: 'md', md: 'lg' }} // Responsive text size
                  fontWeight="bold"
                  color={variables.primaryColor1}
                  textAlign="center"
                  mb={4} // Add margin for spacing
                >
                  {item.subtitle}
                </Text>

                {/* Card Content */}
                <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  p={{ base: 4, md: 6 }} // Responsive padding
                  h={{ base: 'auto', md: '70vh' }} // Dynamic height for mobile
                  width={{ base: '100%', md: '820px' }} // Responsive width
                  textAlign="center"
                  boxShadow="md"
                  bg="white"
                >
                  <Text fontSize={{ base: 'xl', md: '2xl' }} mb={4} fontWeight="bold" color={variables.primaryColor1}>
                    Subjects
                  </Text>

                  {/* Subjects Grid */}
                  <Grid
                    templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }} // Adjust grid columns for mobile
                    gap={4} // Smaller gap for mobile
                  >
                    {Object.entries(item.subjects).map(([category, subjects], i) => (
                      <Box key={i} p={2}>
                        <Text fontSize={{ base: 'sm', md: 'lg' }} fontWeight="bold" color={variables.primaryColor1} mb={2}>
                          {category}
                        </Text>
                        <Stack spacing={2}>
                          {subjects.map((subject, j) => (
                            <Text key={j} fontSize={{ base: 'xs', md: 'sm' }} fontWeight="bold">
                              {subject}
                            </Text>
                          ))}
                        </Stack>
                      </Box>
                    ))}
                  </Grid>

                  {/* Enroll Button */}
                  <Flex justify="center" mt={4}>
                    <Button
                      mt={2}
                      display="block"
                      bg="#fff"
                      size={{ base: 'md', md: 'lg' }} // Responsive button size
                      outlineColor={variables.primaryColor1}
                    >
                      Enroll Now
                    </Button>
                  </Flex>
                </Box>
              </Box>
            ))}
          </Flex>
        </Flex>

        {/* Next Button */}
        <IconButton
          aria-label="Next"
          icon={<ArrowForwardIcon color={variables.primaryColor1} />}
          bg={variables.primaryColor2}
          onClick={nextSlide}
          zIndex="1"
          size={{ base: 'sm', md: 'md' }} // Adjust button size for mobile
        />
      </Flex>

      </Box>

      <Footer />
    </Box>
  );
}

export default AcademicsPage;
