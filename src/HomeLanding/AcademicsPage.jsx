import {
  Box, Text, IconButton, Stack, Button, Flex, HStack, Divider, VStack, Grid
} from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import NavBar from '../CommonPart/NavBar';
import Footer from '../CommonPart/Footer';
import React, { useState } from "react";
import { variables } from '../App';

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
        bgImage="url('src/IconFolder/baby$book.png')"
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
          fontSize="50px"
        >
          <Text>Ignite Your Curiosity and Achieve Excellence</Text>
          <Text>Sylvester Standard High Academics</Text>
        </Box>
      </Box>

      <Box  mx="auto" position="relative">
        <Flex justifyContent="center" alignItems="center" position="relative">
          <IconButton
            aria-label="Previous"
            icon={<ArrowBackIcon color={variables.primaryColor1} />}
            onClick={prevSlide}
            bg={variables.primaryColor2}
            zIndex="1"
          />

          <Flex
            overflow="hidden"
            width="100%"
            position="relative"
            minH="50vh"
            alignItems="center"
            justifyContent="center"
          >
            <Flex
              transform={`translateX(-${currentIndex * 100}%)`}
              transition="transform 1s ease-in-out"
              width={`${100}%`}
            >
              {Data.map((item, index) => (
                <Box
                  key={index}
                  w="99%"
                  p={4}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize="2xl" fontWeight="bold" color={variables.primaryColor1}>
                    {item.title}
                  </Text>
                  <Text fontSize="lg" fontWeight="bold" color={variables.primaryColor1}>
                    {item.subtitle}
                  </Text>

                  <Box
                    borderWidth="1px"
                    borderRadius="lg"
                    p={6}
                    h="70vh"
                    width="820px"
                    textAlign="center"
                    boxShadow="md"
                    bg="white"
                  >
                    <Text fontSize="2xl" mb={4} fontWeight="bold" color={variables.primaryColor1}>
                      Subjects
                    </Text>
                    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                      {Object.entries(item.subjects).map(([category, subjects], i) => (
                        <Box key={i} p={2}>
                          <Text fontSize="lg" fontWeight="bold" color={variables.primaryColor1} mb={2}>
                            {category}
                          </Text>
                          <Stack spacing={2}>
                            {subjects.map((subject, j) => (
                              <Text key={j} fontSize="sm" fontWeight="bold">
                                {subject}
                              </Text>
                            ))}
                          </Stack>
                        </Box>
                      ))}
                    </Grid>

                    <Flex justify="flex-end">
                      <Button mt={2} display="block" bg="#fff" size="lg" outlineColor={variables.primaryColor1}>
                        Enroll Now
                      </Button>
                    </Flex>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Flex>

          <IconButton
            aria-label="Next"
            icon={<ArrowForwardIcon color={variables.primaryColor1} />}
            bg={variables.primaryColor2}
            onClick={nextSlide}
            zIndex="1"
          />
        </Flex>
      </Box>

      <Footer />
    </Box>
  );
}

export default AcademicsPage;
