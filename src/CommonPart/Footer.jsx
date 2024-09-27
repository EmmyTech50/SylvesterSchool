import React from 'react'
import { variables } from '../App'
import {  Box, Img, SimpleGrid, Text, VStack,  } from '@chakra-ui/react'

function Footer() {
  return (
    
    <SimpleGrid columns={{ base: 1, md: 5 }} spacing={0} py={4} px={8} color="white" bg={variables.primaryColor1}  paddingInline={variables.containerMargin}>
        
        <VStack align="start" spacing={4}>
            <Box boxSize='50vh'>
                <Img src='src/IconFolder/schoolLogo.png' />
            </Box>
            
        </VStack>

        <VStack color={'#ffff'} align="start" spacing={4}>
            <Text fontWeight="bold">Quick Links</Text>
            <Text>Admission</Text>
            <Text>Academics</Text>
            <Text>About</Text>
        </VStack>


        <VStack color={'#ffff'} align="start" spacing={4}>   
            <Text fontWeight="bold">Gallary</Text>
            <Text>Sport</Text>
            <Text>Events</Text>
            <Text>Environment</Text>
        </VStack> 
        
        <VStack color={'#ffff'} align="start" spacing={4}>  
            <Text fontWeight="bold">Social</Text>
            <Text>Facebook</Text>
            <Text>Instagram</Text>
            <Text>Twitter</Text>
        </VStack>
        
        <VStack align="start" spacing={4}>  
            <Text color={'#ffff'} fontWeight="bold">Contact Us</Text>
            <Text color={'#ffff'} >+234 707665906</Text>
            <Text color={'#ffff'} >+234 707665906</Text>
            <Text color={'blue'}>SylvesterSHigh@gmail.com</Text>
        </VStack>
        
    </SimpleGrid>


  )
}

export default Footer