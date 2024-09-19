import React from 'react'
import { variables } from '../App'
import {  Box, Img, SimpleGrid, Text, VStack,  } from '@chakra-ui/react'

function Footer() {
  return (
    
    <SimpleGrid columns={{ base: 1, md: 5 }} spacing={0} py={0} bg={variables.primaryColor1} px={5} paddingInline={variables.containerMargin}>
        
        <VStack mt={10} mb={10}>
            <Box boxSize='50vh'>
                <Img src='src/IconFolder/schoolLogo.png' />
            </Box>
            
        </VStack>

        <VStack color={'#ffff'} mt={10} mb={10}>
            <Text>Quick Links</Text>
            <Text>Admission</Text>
            <Text>Academics</Text>
            <Text>About</Text>
        </VStack>


        <VStack color={'#ffff'} mt={10} mb={10}>   
            <Text>Gallary</Text>
            <Text>Sport</Text>
            <Text>Events</Text>
            <Text>Environment</Text>
        </VStack> 
        
        <VStack color={'#ffff'} mt={10} mb={10}>  
            <Text>Social</Text>
            <Text>Facebook</Text>
            <Text>Instagram</Text>
            <Text>Twitter</Text>
        </VStack>
        
        <VStack mt={10} mb={10}>  
            <Text color={'#ffff'} >Contact Us</Text>
            <Text color={'#ffff'} >+234 707665906</Text>
            <Text color={'#ffff'} >+234 707665906</Text>
            <Text color={'blue'}>SylvesterSHigh@gmail.com</Text>
        </VStack>
        
    </SimpleGrid>
  )
}

export default Footer