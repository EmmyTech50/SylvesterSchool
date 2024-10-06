import React from 'react'
import { variables } from '../App'
import {  Box, Flex, HStack, Img, SimpleGrid, Stack, Text, VStack,  } from '@chakra-ui/react'
import { FaUserGraduate } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
    <Box py={4} px={8} color="white" bg={variables.primaryColor1}  paddingInline={variables.containerMargin}>
        <Flex display='flex' justifyContent='space-between' alignItems='center'>
            <VStack align="start" spacing={4}>
                
                <Img src='src/IconFolder/schoolLogo.png' />
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
        </Flex>
        
        <Flex display='flex' justifyContent='space-between' alignItems='center' mt={50}>
            
            <Link to="/admin/home" >
                <HStack spacing={3} color="#001D3D">
                <FaUserGraduate />
                <Text fontSize='lg' fontWeight='bold'>Admin DashBoard</Text>
                </HStack>
            </Link>
            <Link to="/staff/home">
                <HStack spacing={3} color="#001D3D">
                <FaUserGraduate />
                <Text fontSize='lg' fontWeight='bold'>Staff DashBoard</Text>
                </HStack>
            </Link>
            <Link to="/student/studprof">
                <HStack spacing={3} color="#001D3D">
                <FaUserGraduate />
                <Text fontSize='lg' fontWeight='bold'> Student DashBoard</Text>
                </HStack>
            </Link>
            
        </Flex>
        
    </Box>
    


  )
}

export default Footer