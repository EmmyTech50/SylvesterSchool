import { Box, Flex, Heading, Text, Button, VStack, HStack, Image, Container, SimpleGrid, Grid, GridItem, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import NavBar from '../CommonPart/NavBar';
import Footer from '../CommonPart/Footer';
import { variables } from '../App';
import { ArrowForwardIcon, PhoneIcon } from '@chakra-ui/icons';


const AdmissionPage = () => {
  return (
    <Box>

        {/* NavBar Component*/}
        <NavBar />

        {/* Online Registration Section */}
        <Box
            bgImage="url('src/IconFolder/overlayedBook.png')"
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
                
                <Text> Embark on Your Education Journey </Text>
                <Text> Sylvester High Standard School </Text>
                
                        
                    
                
                
                
                    

                
            </Container>

        </Box>
            

        {/* In-Person Registration Section */}
        <Box bgColor={variables.primaryColor1} py={8} px={{ base: 4, md: 8 }}>

            <Heading as={'h6'}  color="#ffff" mb='20px'>
                Registering your child  at Sylvester Standard <br/>
                High School is through our website is simple.<br/>
            </Heading>

            <Heading as={'h6'} color="#ffff" mt='5px'>    Follow these steps: </Heading>
            
        
           
            <Grid
                h="auto"
                templateRows={{ base: 'repeat(5, auto)', md: 'repeat(2, 1fr)' }} // Responsive rows
                templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} // 1 column on small, 3 on medium and above
                gap={4}
                p={4}
                paddingInline={variables.containerMargin}
                >
                {/* GridItem 1 */}
                <GridItem
                    rowSpan={{ base: 1, md: 15 }}
                    colSpan={{ base: 1, md: 1 }}
                    bg="#ffff"
                    p={4}
                    borderRadius="20px"
                    boxShadow="md"
                >
                    <Box paddingInline='10px'>
                        <Heading fontSize="lg" mb={4} color="#7F342E">
                            Create an Account
                        </Heading>
                        <Text fontSize="15px" mb={4} color="gray.600" fontWeight='700'>
                            Set up a personal account with a valid email address.
                        </Text>
                        <Button rightIcon={<ArrowForwardIcon />} color={variables.primaryColor1} mt='40px'>
                            Create Account
                        </Button>
                    </Box>
                </GridItem>

                {/* GridItem 2 */}
                <GridItem
                    rowSpan={{ base: 1, md: 15 }}
                    colSpan={{ base: 1, md: 1 }}
                    bg="#ffff"
                    p={4}
                    borderRadius="20px"
                    boxShadow="md"
                >
                    <Box paddingInline='10px'>
                        <Heading fontSize="lg" mb={4} color="#7F342E">
                            Complete the Application Form
                        </Heading>
                        <Text fontSize="15px" mb={4} color="gray.600" fontWeight='700'>
                            Fill in your child's details, including academic background.
                        </Text>
                        <Button rightIcon={<ArrowForwardIcon />} color={variables.primaryColor1} mt='40px'>
                            Complete Form
                        </Button>
                    </Box>
                </GridItem>

                {/* GridItem 3 */}
                <GridItem
                    rowSpan={{ base: 1, md: 15 }}
                    colSpan={{ base: 1, md: 1 }}
                    bg="#ffff"
                    p={4}
                    borderRadius="20px"
                    boxShadow="md"
                >
                    <Box paddingInline='10px'>
                        <Heading fontSize="lg" mb={4} color="#7F342E">
                            Pay the Registration Fee
                        </Heading>
                        <Text fontSize="15px" mb={4} color="gray.600" fontWeight='700'>
                            Use our secure payment system to complete the fee.
                        </Text>
                        <Button rightIcon={<ArrowForwardIcon />} color={variables.primaryColor1} mt='40px'>
                            Pay Reg Fee
                        </Button>
                    </Box>
                </GridItem>

                {/* GridItem 4 - Spans 2 columns on medium and above */}
                <GridItem
                    rowSpan={{ base: 1, md: 10 }}
                    colSpan={{ base: 1, md: 2 }}
                    bg="#ffff"
                    p={4}
                    borderRadius="20px"
                    boxShadow="md"
                >
                    <Box paddingInline='10px' >
                        <Heading fontSize="lg" mb={4} color="#7F342E">
                            Submit Application
                        </Heading>
                        <Text fontSize="15px" mb={4} color="gray.600" fontWeight='700'>
                            After reviewing the form, submit it to complete your application. You will receive an
                            email confirmation with next steps, including details on assessments or interviews.
                        </Text>
                    </Box>
                </GridItem>

                {/* GridItem 5 */}
                <GridItem
                    rowSpan={{ base: 1, md: 15 }}
                    colSpan={{ base: 1, md: 1 }}
                    bg="#ffff"
                    p={4}
                    borderRadius="20px"
                    boxShadow="md"
                >
                    <Box paddingInline='10px'>
                        <Heading fontSize="lg" mb={4} color="#7F342E">
                            For help, contact our admissions team
                        </Heading>
                        <Text fontSize="15px" mb={4} color="gray.600" fontWeight='700'>
                            We are committed to providing prompt responses to ensure a smooth and efficient
                            registration process.
                        </Text>
                        <Button rightIcon={<PhoneIcon />} color={variables.primaryColor1} mt='40px' >
                            Contact
                        </Button>
                    </Box>
                </GridItem>
            </Grid>
        
        </Box>

        {/* Map Direction */}
        <Box bgColor={variables.primaryColor2} py={8} px={{ base: 4, md: 8 }}>
            <Heading as={'h6'}  color={variables.primaryColor1} >
                Registering your child  at Sylvester Standard <br/>
                High School is through our website is simple.<br/>
                Follow these steps:
            </Heading>
            
            {/* section of the map */}
            <Box>
                

            </Box >

            <SimpleGrid 
            spacing={10} 
            templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
            
            
            >
                <Card ml='80px'>
                    
                    <CardBody>
                        <Heading size='md' color={variables.primaryColor1}> Visit The Admission Office</Heading>
                        <Text> Head to our admissions office during </Text>
                        <Text> working hours to pick up a registration </Text>
                        <Text> form </Text> 
                    </CardBody>
                    
                </Card>
                <Card >
                    
                    <CardBody>
                        <Heading size='md' color={variables.primaryColor1}> Submit Required Documents</Heading>
                        <Text>Provide photocopies of necessary</Text> 
                        <Text> documents, such as birth certificates, </Text>
                        <Text> passport photos, and previous school </Text>
                        <Text> report cards</Text>
                    </CardBody>
                
                </Card>
                <Card  mr='80px'>
                
                    <CardBody>
                        <Heading size='md' color={variables.primaryColor1}> Pay the Registration Fee</Heading>
                        <Text> Pay the required registration fee at the </Text>
                        <Text> school’s finance office and obtain a receipt</Text> 
                       
                    </CardBody>
                    
                </Card>
            </SimpleGrid>
        
        </Box> 

        {/* Footer Section */}
        <Footer /> 
  
      
    </Box>
    
  );
};

export default AdmissionPage;
