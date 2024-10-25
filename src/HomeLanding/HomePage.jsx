import { Box, VStack, HStack, Text, Button, Image, Container, SimpleGrid } from '@chakra-ui/react';
import EventsCard from '../CommonPart/EventsCard';
import NavBar from '../CommonPart/NavBar';
import Footer from '../CommonPart/Footer';
import { variables } from '../App';
import HomeBg from '../assets/HomeBg.png';
import BookOpen from '../assets/Book open.png';
import people from '../assets/people.png';
import Book from '../assets/Book.png';
import Star from '../assets/Star.png';
import baby$book from '../assets/baby$book.png';
import greentree from '../assets/greentree.png';
import bookstack from '../assets/bookstack.png';
import cap from '../assets/cap.png';
import culturalWear from '../assets/culturalWear.png';
import football from '../assets/football.png';
import DoctorWear from '../assets/DoctorWear.png';

function HomePage() {
  return (
    <Box>
      {/* NavBar Component*/}
      <NavBar />

      {/* Hero Section */}
      <Box
        bgImage={HomeBg}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        minH={{ base: '60vh', md: '80vh' }} 
        position="relative"
      >
        <Container
          m="0"
          paddingInline={variables.containerMargin}
          height={{ base: '80vh', md: '100vh' }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Text
              color={variables.primaryColor2}
              fontStyle={variables.fonts2}
              fontWeight="500"
              fontSize={{ base: '18px', md: '30px' }} 
              lineHeight="25px"
              letterSpacing="1px"
              textAlign="center"
            >
              Welcome to Sylvester Standard High School
              Where potential and creativity thrive, shaping tomorrow's leaders.
            </Text>
          </Box>

          <Box w="100%" mt="20px" textAlign="center">
            <Button colorScheme="red" w={{ base: '80%', md: '50%' }}>
              Enroll Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Milestones Section */}
      <Text
        mt="10px"
        textAlign="center"
        color={variables.secondaryColor}
        fontSize={{ base: '18px', md: '22px' }} 
        fontWeight="500"
      >
        Milestones of Success
      </Text>

      <HStack
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py="10px"
        flexDirection={{ base: 'column', md: 'row' }}
        paddingInline={variables.containerMargin} 
      >
        <VStack textAlign="center" mb={{ base: '20px', md: '0' }}>
          <Box
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="full"
            boxSize={{ base: '80px', md: '100px' }} 
            bg={variables.primaryColor2}
            color="white"
          >
            <Image src={BookOpen} sizes="sm" />
          </Box>
          <Text color={variables.primaryColor1} fontWeight="700" fontSize="20px">
            Students
          </Text>
          <Text fontSize="20px" fontWeight="700">
            1M
          </Text>
        </VStack>

        <VStack textAlign="center" mb={{ base: '20px', md: '0' }}>
          <Box
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="full"
            boxSize={{ base: '80px', md: '100px' }} 
            bg={variables.primaryColor2}
            color="white"
          >
            <Image src={people} sizes="sm" />
          </Box>
          <Text color={variables.primaryColor1} fontWeight="700" fontSize="20px">
            Teachers
          </Text>
          <Text fontSize="20px" fontWeight="700">
            10k
          </Text>
        </VStack>

        <VStack textAlign="center" mb={{ base: '20px', md: '0' }}>
          <Box
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="full"
            boxSize={{ base: '80px', md: '100px' }} 
            bg={variables.primaryColor2}
            color="white"
          >
            <Image src={Book} />
          </Box>
          <Text color={variables.primaryColor1} fontWeight="700" fontSize="20px">
            Courses
          </Text>
          <Text fontSize="20px" fontWeight="700">
            200
          </Text>
        </VStack>

        <VStack textAlign="center">
          <Box
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="full"
            boxSize={{ base: '80px', md: '100px' }} 
            bg={variables.primaryColor2}
            color="white"
          >
            <Image src={Star} />
          </Box>
          <Text color={variables.primaryColor1} fontWeight="700" fontSize="20px">
            Rating
          </Text>
          <Text fontSize="20px" fontWeight="700">
            Top 10
          </Text>
        </VStack>
      </HStack>

      {/* Programs Section */}
      <Box
        bgImage={baby$book}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover" // Ensure the image covers the entire background
        minH="100vh" // Set to 100vh to cover the full viewport height
        position="relative"
        py={{ base: 10, md: 20 }}
      >
        <Text
          textAlign="center"
          fontSize="2xl"
          fontWeight="bold"
          mb={10}
          color="#ffff"
        >
          Explore Our Academic Programs
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={10}
          paddingInline={variables.containerMargin}
        >
          <Box
            bg="#ffff"
            p={10}
            textAlign="center"
            rounded="md"
            boxShadow="md"
            mb={{ base: 6, md: 0 }}
          >
            <Box
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="full"
              boxSize={{ base: '80px', md: '100px' }}
              bg="#ffff"
              color="white"
              boxShadow="lg"
            >
              <Image src={greentree} sizes="sm" />
            </Box>
            <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="bold" color={variables.primaryColor1}>
              Primary Education Program
            </Text>
            <Text fontWeight="500" fontSize={{ base: 'sm', md: 'lg' }}>
              Where Every Child's Journey Begins.
            </Text>
            <Box w="100%" mt="4px" textAlign="center">
              <Button mt={4} color={variables.primaryColor1} outlineColor={variables.primaryColor1} w={{ base: '105%', md: '50%' }}>
                Enroll Now
              </Button>
            </Box>
          </Box>

          <Box
            bg="#ffff"
            p={10}
            textAlign="center"
            rounded="md"
            boxShadow="md"
          >
            <Box
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="full"
              boxSize={{ base: '80px', md: '100px' }}
              bg="#ffff"
              color="white"
              boxShadow="lg"
            >
              <Image src={bookstack} sizes="sm" />
            </Box>
            <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="bold" color={variables.primaryColor1}>
              Junior Secondary Program
            </Text>
            <Text fontWeight="500" fontSize={{ base: 'sm', md: 'lg' }}>
              Building Foundations for Success.
            </Text>
            <Box w="100%" mt="4px" textAlign="center">
              <Button mt={4} color={variables.primaryColor1} outlineColor={variables.primaryColor1} w={{ base: '105%', md: '50%' }}>
                Enroll Now
              </Button>
            </Box>
          </Box>

          <Box
            bg="#ffff"
            p={10}
            textAlign="center"
            rounded="md"
            boxShadow="md"
          >
            <Box
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="full"
              boxSize={{ base: '80px', md: '100px' }}
              bg="#ffff"
              color="white"
              boxShadow="lg"
            >
              <Image src={cap} sizes="sm" />
            </Box>
            <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="bold" color={variables.primaryColor1}>
              Secondary School Program
            </Text>
            <Text fontWeight="500" fontSize={{ base: 'sm', md: 'lg' }}>
              Empowering Future Leaders.
            </Text>
            <Box w="100%" textAlign="center">
              <Button mt={4} color={variables.primaryColor1} outlineColor={variables.primaryColor1} w={{ base: '105%', md: '50%' }}>
                Enroll Now
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Events Section */}
      <Box
        py={{ base: 10, md: 20 }}
        bg={variables.primaryColor2}
        px={{ base: 4, md: 10 }}
        paddingInline={variables.containerMargin}
      >
        <Text
          textAlign="center"
          fontSize="2xl"
          fontWeight="bold"
          mb={10}
          color={variables.primaryColor1}
        >
          Events
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <EventsCard
            evtTitle="Cultural Day"
            evtBgImage={culturalWear}
            evtDetailText="Nigeria's rich cultural diversity where students can showcase traditional attire"
          />
          <EventsCard
            evtTitle="Football Match"
            evtBgImage={football}
            evtDetailText="A football match for students to showcase their sportsmanship and teamwork"
          />
          <EventsCard
            evtTitle="Health Day"
            evtBgImage={DoctorWear}
            evtDetailText="A day to focus on health awareness and medical career exploration"
          />
        </SimpleGrid>
      </Box>

      {/* Footer Section */}
      <Footer />
    </Box>
  );
}

export default HomePage;
