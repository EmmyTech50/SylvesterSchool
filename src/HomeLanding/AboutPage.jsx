import { Box, Text, Image, Heading, Flex, Grid, Container, Button, Card, CardBody, Stack, GridItem, SimpleGrid, CardHeader, CardFooter } from '@chakra-ui/react';
import Footer from '../CommonPart/Footer';
import { variables } from '../App';
import NavBar from '../CommonPart/NavBar';

const AboutPage = () => {
  return (
    <Box>

        {/* NavBar Component*/}
        <NavBar />
        

        {/* Our Story Section */}
        <Box
          bgImage="url('src/IconFolder/schoolsite.png')"
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
                <Text> A Chronicle of Our Journey </Text>
                <Text> Honoring the Past, Shaping the Future </Text>
            </Container>
                
        </Box>
                
        {/*   Our Story */}
        <Box bg={variables.primaryColor1} color="#ffff" p={8} h='70vh'>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}
            justifyContent='space-between'
            alignItems='center'

            >
            
                <Heading as='h2'> Our Story </Heading>

                <Box 
                bgColor="#ffff"    
                borderTopRadius='20px' 
                h='65vh' 
                position='relative'
                right='-450px'
                >
                    
                </Box>

            </SimpleGrid>


        </Box>

        {/*   Our Dedcation */}
        <Box bg="#ffff"  p={8} h='70vh'>
            <Flex 
            flexDirection='row'
            justifyContent='space-between'
            alignItems='center'
            >
                <Heading as='h2' color={variables.primaryColor1}> Meet Our Dedicated Team </Heading>  
            
                <Card maxW='50vh'>
                    <CardBody>
                        <Image src='src/IconFolder/people.png'/>
                        <Stack mt='6' spacing='3'>
                            <Text colorScheme="#0000">
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces, earthy toned spaces and for people who love a chic design with a
                                sprinkle of vintage design.
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
            </Flex>
                            

            
            
        </Box>
               
        {/* Why Choose Us Section */}
        <Box bg={variables.primaryColor2} p={8} h='50vh'>
            <Heading 
            size="md" mb={4} display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
            > 
            Why Choose Us?
            </Heading>

            <SimpleGrid 
            spacing={4} 
            templateColumns='repeat(auto-fill, minmax(200px, 1fr))' 
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
            >
                <Card>
                    <CardHeader>
                    <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                    <Button>View here</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                    <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                    <Button>View here</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                    <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                    <Button>View here</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                    <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                    <Button>View here</Button>
                    </CardFooter>
                </Card>
            </SimpleGrid>
        </Box>
        <Box bg='#ffff' p={8} h='20vh'></Box>

        {/* Community Involvement Section */}
        <Box pt={20} bg={variables.primaryColor1} px={10} paddingInline={variables.containerMargin}>
          <Text textAlign="center" fontSize="2xl" fontWeight="bold" mb={5} color='#ffff'>Community Involvement</Text>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>

                <Box 
                bgImage="src/IconFolder/boywriting.png"    
                borderTopRadius='20px' 
                h='50vh' 
                bgPosition="center"
                bgRepeat="no-repeat" 
                bgSize="cover" 
                ></Box>

                <Box 
                bgImage="src/IconFolder/youngmanwriting.png"  
                borderTopRadius='20px' 
                boxShadow="md" h='50vh' 
                bgPosition="center"
                bgRepeat="no-repeat" 
                bgSize="cover"
                ></Box>

                <Box 
                bgImage="src/IconFolder/teamsOnPc.png"  
                borderTopRadius='20px'
                boxShadow="md" 
                h='50vh'
                bgPosition="center"
                bgRepeat="no-repeat" 
                bgSize="cover" 
                ></Box>
            
           
            </SimpleGrid>
        </Box>

        <Box bg={variables.primaryColor2} p={8} h='40vh'>
            <Flex
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='space-between'
            py={2}
            >
                <Box>
                    <Image src='src/IconFolder/Oracle-Logo-PNG5 (1).svg'/>
                </Box>
                <Box>
                    <Image src='src/IconFolder/Cambridge.png'/>
                </Box>
                <Box>
                    <Image src='src/IconFolder/unicef.png'/>
                </Box>
                <Box>
                    <Image src='src/IconFolder/Vector.png'/>
                </Box>
            </Flex>
        </Box>
                    
        {/* Footer Section */}
        <Footer /> 
    </Box>
                
    );
};
          
export default AboutPage;
                      

                

                 


            



           
  

          
            

          

        
      

