import { Box, Text, Image, Heading, Flex, Container, Button, Card, CardBody, Stack,  SimpleGrid, CardHeader, CardFooter } from '@chakra-ui/react';
import Footer from '../CommonPart/Footer';
import { variables } from '../App';
import NavBar from '../CommonPart/NavBar';
import schoolsite from '../assets/schoolsite.png';
import people from '../assets/people.png';
import boywriting from '../assets/boywriting.png';
import youngmanwriting from '../assets/youngmanwriting.png';
import teamsOnPc from '../assets/teamsOnPc.png';
import Oracle from '../assets/Oracle-Logo-PNG5 (1).svg';
import Cambridge from '../assets/Cambridge.png';
import unicef from '../assets/unicef.png';
import Vector from '../assets/Vector.png';
  
const images = [boywriting, youngmanwriting, teamsOnPc];
const partners = [Oracle, Cambridge, unicef, Vector];
const AboutPage = () => {
  return (
    <Box>
      {/* NavBar Component */}
      <NavBar />

      {/* Our Story Section */}
      <Box
        bgImage={schoolsite}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        minH="80vh"
        position="relative"
      >
        <Container
          m="0"
          paddingInline={variables.containerMargin}
          height={{ base: "60vh", md: "100vh" }} // Adjust height for mobile
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          color="#ffff"
          fontSize={{ base: "24px", md: "50px" }} // Responsive font size
        >
          <Text textAlign="center">A Chronicle of Our Journey</Text>
          <Text textAlign="center">Honoring the Past, Shaping the Future</Text>
        </Container>
      </Box>


      {/* Our Story */}
      <Box bg={variables.primaryColor1} color="#ffff" p={8} minH="70vh">
        <SimpleGrid 
          columns={{ base: 1, md: 2 }} // One column on mobile, two on medium and larger screens
          spacing={10} // Spacing between the grid items
          alignItems="center"
        >
          <Heading 
            as="h2" 
            textAlign={{ base: 'center', md: 'left' }} // Center the heading on mobile, left align on larger screens
          >
            Our Story
          </Heading>

          <Box 
            bgColor="#ffff" 
            borderTopRadius="20px" 
            h="70vh" 
            w={{ base: '100%', md: '95%' }}
            position="relative"
            transform={{ base: 'none', md: 'translateX(50px)' }} // No transformation on mobile, shift on larger screens
            mt={{ base: 4, md: 0 }} // Add margin on mobile to separate the items
          />
        </SimpleGrid>
      </Box>


      {/* Our Dedication */}
      <Box bg="#ffff" p={8} minH="70vh"> 
        <Flex 
          flexDirection={{ base: 'column', md: 'row' }} // Stack items vertically on mobile, horizontally on medium and larger screens
          justifyContent="space-between" 
          alignItems="center"
        >
          <Heading 
            as="h2" 
            color={variables.primaryColor1} 
            textAlign={{ base: 'center', md: 'left' }} // Center text on mobile, left align on larger screens
            mb={{ base: 4, md: 0 }} // Add margin on mobile for spacing
          >
            Meet Our Dedicated Team
          </Heading>

          <Card 
            maxW={{ base: '100%', md: '50vh' }} // Full width on mobile, limited width on medium and larger screens
            mt={{ base: 4, md: 0 }} // Add margin on mobile to create spacing between the heading and card
          >
            <CardBody>
              <Image src={people} />
              <Stack mt="6" spacing="3">
                <Text textAlign="center"> {/* Center the text on all screens */}
                  This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces, and for people who love a chic design with a sprinkle of vintage design.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Flex>
      </Box>


      {/* Why Choose Us Section */}
      <Box bg={variables.primaryColor2} p={8} minH="50vh"> 
        <Heading 
          size="md" 
          mb={4} 
          textAlign="center"  // Center heading for all screen sizes
        >
          Why Choose Us?
        </Heading>

        <SimpleGrid 
          spacing={4} 
          columns={{ base: 1, sm: 2, md: 4 }} // Responsive columns: 1 on mobile, 2 on small screens, 4 on medium and above
          justifyItems="center" // Center grid items horizontally
          alignItems="center"   // Center grid items vertically
        >
          {Array(4).fill().map((_, i) => (
            <Card key={i} w={{ base: '90%', sm: '80%', md: '100%' }}> {/* Adjust width for different screens */}
              <CardHeader>
                <Heading size="md" textAlign="center"> {/* Center heading inside the card */}
                  Customer dashboard
                </Heading>
              </CardHeader>
              <CardBody>
                <Text textAlign="center"> {/* Center text inside the card */}
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
              <CardFooter>
                <Button w="100%"> {/* Make button take full width on all screens */}
                  View here
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Box>


      <Box bg="#ffff" p={8} h="20vh"></Box>

      {/* Community Involvement Section */}
      <Box pt={20} bg={variables.primaryColor1} px={10} paddingInline={variables.containerMargin}>
        <Text textAlign="center" fontSize="2xl" fontWeight="bold" mb={5} color="#ffff">Community Involvement</Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {images.map((image, i) => (
          <Box
            key={i}
            bgImage={`url(${image})`}
            borderTopRadius="20px"
            h="50vh"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            boxShadow="md"
          />
        ))}
        </SimpleGrid>
      </Box>

      <Box bg={variables.primaryColor2} p={8} h="25vh">
        <Flex display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" py={2}>
          {partners.map((partners, i) => (
            <Box key={i}>
              <Image src={`url(${partners})`} />
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Footer Section */}
      <Footer />
    </Box>
  );
};

export default AboutPage;
