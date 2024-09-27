import { Box, Flex, Grid, GridItem, Heading, Text, Button, IconButton, Input, Container, FormControl, FormLabel, Badge, Stack, VStack } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Slider from 'react-slick';
import { variables, settings } from '../App';
import NavBar from '../CommonPart/NavBar';
import Footer from '../CommonPart/Footer';






const subjects = [
    {
      title: "Lower Primary School",
      subtitle: "Year 1 to 3 (Grade 1 to 3)\nAges 5 to 7",
      subjects: {
        "Core Academic Subjects": [
          "Numeracy",
          "Quantitative Reasoning",
          "Grammar",
          "Handwriting",
          "Comprehension & Poetry",
          "Spelling / Dictation",
          "Verbal Reasoning",
          "English Language",
        ],
        "Science and Technology": [
          "Basic Science",
          "Basic Science and Tech",
          "Computer Studies",
        ],
        "Social and Cultural Studies": [
          "French",
          "Social Studies",
          "Language",
          "Christian Religious Knowledge",
        ],
        "Creative and Performing Arts": ["Music", "Fine Art", "Diction"],
        "Home and Practical Skills": ["Home Economics"],
      },
    },
    {
      title: "Upper Primary School",
      subtitle: "Year 4 to 6 (Grade 4 to 6)\nAges 8 to 11",
      subjects: {
        "Core Academic Subjects": [
          "Advanced Numeracy",
          "Advanced Grammar",
          "Essay Writing",
        ],
        "Science and Technology": [
          "Physics",
          "Chemistry",
          "Computer Studies",
        ],
        "Social and Cultural Studies": [
          "Geography",
          "World History",
        ],
        "Creative and Performing Arts": ["Drama", "Painting"],
        "Home and Practical Skills": ["Cooking"],
      },
    },
    // Add more subjects/categories here if needed
  ];
  
 


function AcademicsPage() {
  return (
    <Box>
        
        {/* NavBar Component*/}
        <NavBar />

        {/* Hero Section */}
        <Box
            bgImage="url('src/IconFolder/baby$book.png')"
            bgPosition="center"
            bgRepeat="no-repeat" 
            bgSize="cover"
            minH="80vh" 
            position="relative"
            >

            <Container
                m='0'
                paddingInline={variables.containerMargin} 
                height='100vh'
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                color='#ffff'
                fontSize='50px'
            
            >
                
                <Text> Ignite Your Curiosity and Achieve Excellence </Text>
                <Text> Sylvester Standard High Academics </Text>
                
            </Container>
                        
        </Box>
                    
        {/* Main Content Section with Next Icons */}
        

            {/* Ensure the carousel box is centered and has 50% width */}
           
            <Slider {...settings} >
            {subjects.map((item, index) => (
                <Box
                key={index}
                bg="green"
                p={8}
                rounded="lg"
                boxShadow="md"
                textAlign="center"
                w="100%"
                >
                {/* Centered Title */}
                <Heading fontSize="xl" mb={2} color="red.600">
                    {item.title}
                </Heading>

                {/* Centered Subtitle */}
                <Text mb={4} fontSize="md">
                    {item.subtitle}
                </Text>

                <Heading fontSize="lg" mb={4}>
                    Subjects
                </Heading>

                {/* Flex Grid layout for subjects (horizontal scroll) */}
                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
                    gap={6}
                    textAlign="left"
                    justifyContent="center"
                    alignItems="center"
                >
                    {Object.entries(item.subjects).map(([category, subItems]) => (
                    <GridItem key={category}>
                        <Heading fontSize="md" mb={2} color="red.500">
                        {category}
                        </Heading>
                        <ul>
                        {subItems.map((subItem, i) => (
                            <li key={i}>{subItem}</li>
                        ))}
                        </ul>
                    </GridItem>
                    ))}
                </Grid>

                {/* Centered Enroll Button */}
                <Button
                    mt={6}
                    colorScheme="red"
                    variant="outline"
                    rightIcon={<ArrowForwardIcon />}
                >
                    Enroll Now
                </Button>
                </Box>
            ))}
            </Slider>
          
        {/* Footer Section */}
        <Footer /> 
  
            
    </Box>
  );
}

export default AcademicsPage;
                   

                    
                
                
                
                    

                


