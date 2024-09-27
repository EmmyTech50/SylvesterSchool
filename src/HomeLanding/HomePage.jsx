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
import NarBar from '../CommonPart/NavBar';
import Footer from '../CommonPart/Footer';
import { variables } from '../App';

  
function HomePage() {
  
  
  return (
   

      <Box >
       
        {/* NavBar Component*/}
        <NarBar />

        {/* Hero Section */}
        <Box
          bgImage="url('src/IconFolder/HomeBg.png')"
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
            
         
          >
            <Box>
              <Text 
                       
                    color={variables.primaryColor2} 
                    fontStyle={variables.fonts2}  
                    fontWeight='500' fontSize='30px'
                    lineHeight='25px'
                    letterSpacing='1px'
                    
              >
                    
                Welcome to Sylvester Standard High School      
                Where potential and creativity thrive, shaping 
                tomorrow's leaders.
              </Text>
            </Box>
            
                 

            <Box w='100%' mt='20px'>
            <Button  colorScheme="red" w='50%' >Enroll Now</Button>
            </Box>
          </Container>

        </Box>
            
        {/* Milestones Section */}
        <Text
        mt={'10px'}
        textAlign={'center'}
        color={variables.secondaryColor}
        fontSize={'22px'}
        fontWeight={'500'}
        
        >
          Milstones of Success
          
        </Text>
                  
        <HStack
        display='flex'
        justifyContent='space-between'
        alignItems='center' 
        py='10px'
        >
          
          <VStack textAlign="center" ml='250px'>
            <Box
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="full"
              boxSize={{ base: '100px', md: '100px' }} 
              bg={variables.primaryColor2}
              color="white"
            >
              <Image src='src/IconFolder/Book open.png' sizes='sm'/>

            </Box>
              <Text color={variables.primaryColor1} fontWeight='700' fontSize='20px'>Students</Text>
              <Text fontSize="20px" fontWeight="700">1M</Text>
          </VStack>

          <VStack textAlign="center" ml='10px'>
            <Box
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="full"
              boxSize={{ base: '100px', md: '100px' }} 
              bg={variables.primaryColor2}
              color="white"
              >
              <Image src='src/IconFolder/people.png' sizes='sm'/>
            </Box>
              <Text color={variables.primaryColor1} fontWeight='700' fontSize='20px'>Teachers</Text>
              <Text fontSize="20px" fontWeight="700">10k</Text>
          </VStack>

          
          <VStack textAlign="center">

            <Box
             display="inline-flex"
             alignItems="center"
             justifyContent="center"
             borderRadius="full"
             boxSize={{ base: '100px', md: '100px' }} 
             bg={variables.primaryColor2}
             color="white"
            >
            <Image src='src/IconFolder/Book.png' />
            </Box>
            <Text color={variables.primaryColor1} fontWeight='700' fontSize='20px'>Courses</Text>
            <Text fontSize="20px" fontWeight="700">200</Text>
          </VStack>


          <VStack textAlign="center" mr='250px'>
            <Box
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="full"
              boxSize={{ base: '100px', md: '100px' }} 
              bg={variables.primaryColor2}
              color="white"
            >
              <Image src='src/IconFolder/star.png' />
            </Box>
            <Text color={variables.primaryColor1} fontWeight='700' fontSize='20px'>Rating</Text>
            <Text fontSize="20px" fontWeight="700">Top 10</Text>
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
          
        >
          <Text textAlign="center" fontSize="2xl" fontWeight="bold" mb={10} color='#ffff' position={'relative'} top={9} >Explore Our Academic Programs</Text>

          <SimpleGrid 
          columns={{ base: 1, md: 3 }} 
          spacing={10} 
          paddingInline={variables.containerMargin}
          mt='100px'
          h='50vh'
          >

            <Box bg="#ffff" p={10} textAlign="center" rounded="md" boxShadow="md" >
              <Box
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="full"
                boxSize={{ base: '100px', md:'100px' }} 
                bg={'#ffff'}
                color="white"
                boxShadow='lg'
                position={'relative'}
                top={-30}
              >
                <Image src='src/IconFolder/greentree.png' sizes='sm'/>

              </Box>
              <Text fontSize="xl" fontWeight="bold"color={variables.primaryColor1} position={'relative'} top={-5}>Primary Education </Text> 
              <Text fontSize="xl" fontWeight="bold"color={variables.primaryColor1} position={'relative'} top={-5}>Program</Text>
              <Text fontWeight='500' fontSize='15px' position={'relative'} top={-3}>Where Every Child's </Text>
              <Text fontWeight='500' fontSize='15px' position={'relative'} top={-3}> Journey Begins.</Text>
              <Button  color={variables.primaryColor1} position={'relative'} top={3} outlineColor={variables.primaryColor1}>Enroll Now</Button>

            </Box>

            <Box bg="#ffff" p={10} textAlign="center" rounded="md" boxShadow="md" > 

              <Box
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="full"
                  boxSize={{ base: '100px', md:'100px' }} 
                  bg={'#ffff'}
                  color="white"
                  boxShadow='lg'
                  position={'relative'}
                  top={-30}
                >
                <Image src='src/IconFolder/bookstack.png' sizes='sm'/>

              </Box>

              <Text fontSize="xl" fontWeight="bold"color={variables.primaryColor1} position={'relative'} top={-5}>Junior Secondary </Text> 
              <Text fontSize="xl" fontWeight="bold"color={variables.primaryColor1} position={'relative'} top={-5}>Program</Text>
              <Text fontWeight='500' fontSize='15px' position={'relative'} top={-3}>Building Foundations for </Text>
              <Text fontWeight='500' fontSize='15px' position={'relative'} top={-3}> Success.</Text>
              <Button  color={variables.primaryColor1} position={'relative'} top={3} outlineColor={variables.primaryColor1}>Enroll Now</Button>
            </Box>


            <Box bg="#ffff" p={10} textAlign="center" rounded="md" boxShadow="md" >

            <Box
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="full"
                boxSize={{ base: '100px', md:'100px' }} 
                bg={'#ffff'}
                color="white"
                boxShadow='lg'
                position={'relative'}
                top={-30}
              >
                <Image src='src/IconFolder/cap.png' sizes='sm'/>

              </Box>
              <Text fontSize="xl" fontWeight="bold"color={variables.primaryColor1} position={'relative'} top={-5}>Secondary School </Text> 
              <Text fontSize="xl" fontWeight="bold"color={variables.primaryColor1} position={'relative'} top={-5}>Program</Text>
              <Text fontWeight='500' fontSize='15px'position={'relative'} top={-3}>Empowering Future </Text>
              <Text fontWeight='500' fontSize='15px'position={'relative'} top={-3}> Leaders.</Text>
              <Button  color={variables.primaryColor1} position={'relative'} top={3} outlineColor={variables.primaryColor1}>Enroll Now</Button>
            </Box>
          </SimpleGrid>
        </Box>
  
        {/* Events Section */}
        <Box py={20} bg={variables.primaryColor2} px={10} paddingInline={variables.containerMargin}>
          <Text textAlign="center" fontSize="2xl" fontWeight="bold" mb={10} color={variables.primaryColor1}>Events</Text>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>

            <EventsCard
                evtTitle='Cultural Day'
                evtBgImage='src/IconFolder/culturalWear.png'
                evtDetailText="Nigeria's rich cultural
                              diversity where students
                                can showcase traditional attire"
            />
            <EventsCard
                evtTitle='Cultural Day'
                evtBgImage='src/IconFolder/football.png'
                evtDetailText="Nigeria's rich cultural
                              diversity where students
                                can showcase traditional attire"
            />
            <EventsCard
                evtTitle='Cultural Day'
                evtBgImage='src/IconFolder/DoctorWear.png'
                evtDetailText="Nigeria's rich cultural
                              diversity where students
                                can showcase traditional attire"
            />

          
          </SimpleGrid>
        </Box>

        {/* Footer Section */}
        <Footer /> 
  
      </Box>
  
    );
}

export default HomePage;

        

   

      