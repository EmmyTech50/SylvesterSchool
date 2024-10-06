import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Image,
  Container,
  SimpleGrid,
} from '@chakra-ui/react';
import EventsCard from '../CommonPart/EventsCard';
import NavBar from '../CommonPart/NavBar';
import Footer from '../CommonPart/Footer';
import { variables } from '../App';

function HomePage() {
  return (
    <Box>
      {/* NavBar Component*/}
      <NavBar />

      {/* Hero Section */}
      <Box
        bgImage="url('src/IconFolder/HomeBg.png')"
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
            <Image src="src/IconFolder/Book open.png" sizes="sm" />
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
            <Image src="src/IconFolder/people.png" sizes="sm" />
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
            <Image src="src/IconFolder/Book.png" />
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
            <Image src="src/IconFolder/star.png" />
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
        bgImage="url('src/IconFolder/Baby$book.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        minH="80vh"
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
              <Image src="src/IconFolder/greentree.png" sizes="sm" />
            </Box>
            <Text fontSize="xl" fontWeight="bold" color={variables.primaryColor1}>
              Primary Education Program
            </Text>
            <Text fontWeight="500" fontSize="15px">
              Where Every Child's Journey Begins.
            </Text>
            <Button color={variables.primaryColor1} outlineColor={variables.primaryColor1} mt={4}>
              Enroll Now
            </Button>
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
              <Image src="src/IconFolder/bookstack.png" sizes="sm" />
            </Box>
            <Text fontSize="xl" fontWeight="bold" color={variables.primaryColor1}>
              Junior Secondary Program
            </Text>
            <Text fontWeight="500" fontSize="15px">
              Building Foundations for Success.
            </Text>
            <Button color={variables.primaryColor1} outlineColor={variables.primaryColor1} mt={4}>
              Enroll Now
            </Button>
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
              <Image src="src/IconFolder/cap.png" sizes="sm" />
            </Box>
            <Text fontSize="xl" fontWeight="bold" color={variables.primaryColor1}>
              Secondary School Program
            </Text>
            <Text fontWeight="500" fontSize="15px">
              Empowering Future Leaders.
            </Text>
            <Button color={variables.primaryColor1} outlineColor={variables.primaryColor1} mt={4}>
              Enroll Now
            </Button>
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
            evtBgImage="src/IconFolder/culturalWear.png"
            evtDetailText="Nigeria's rich cultural diversity where students can showcase traditional attire"
          />
          <EventsCard
            evtTitle="Football Match"
            evtBgImage="src/IconFolder/football.png"
            evtDetailText="A football match for students to showcase their sportsmanship and teamwork"
          />
          <EventsCard
            evtTitle="Health Day"
            evtBgImage="src/IconFolder/DoctorWear.png"
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
