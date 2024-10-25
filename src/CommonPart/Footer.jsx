import React from 'react'
import { variables } from '../App'
import { Box, Flex, HStack, Img, VStack, Text, Link } from '@chakra-ui/react'
import { FaUserGraduate } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import schoolLogo from '../assets/schoolLogo.png';

function Footer() {
  return (
    <Box py={4} px={8} color="white" bg={variables.primaryColor1} paddingInline={variables.containerMargin}>
      {/* Main Footer Section */}
      <Flex 
        direction={{ base: 'column', md: 'row' }} // Stack vertically on mobile, horizontally on larger screens
        justifyContent="space-between" 
        alignItems="start"
        mb={8}
      >
        {/* School Logo */}
        <VStack align="start" spacing={4} mb={{ base: 8, md: 0 }}>
          <Img src={schoolLogo} />
        </VStack>

        {/* Quick Links Section */}
        <VStack color={'#ffff'} align="start" spacing={4} mb={{ base: 8, md: 0 }}>
          <Text fontWeight="bold">Quick Links</Text>
          <Text>Admission</Text>
          <Text>Academics</Text>
          <Text>About</Text>
        </VStack>

        {/* Gallery Section */}
        <VStack color={'#ffff'} align="start" spacing={4} mb={{ base: 8, md: 0 }}>
          <Text fontWeight="bold">Gallery</Text>
          <Text>Sport</Text>
          <Text>Events</Text>
          <Text>Environment</Text>
        </VStack>

        {/* Social Section */}
        <VStack color={'#ffff'} align="start" spacing={4} mb={{ base: 8, md: 0 }}>
          <Text fontWeight="bold">Social</Text>
          <Text>Facebook</Text>
          <Text>Instagram</Text>
          <Text>Twitter</Text>
        </VStack>

        {/* Contact Us Section */}
        <VStack align="start" spacing={4}>
          <Text color={'#ffff'} fontSize='sm' fontWeight="bold">Contact Us</Text>
          <Text color={'#ffff'} fontSize='sm' fontWeight='bold'>+234 707665906</Text>
          <Text color={'#ffff'} fontSize='sm' fontWeight='bold'>+234 707665906</Text>
          <Text color={"#001D3D"} fontSize='sm' fontWeight='bold'>SylvesterSHigh@gmail.com</Text>
        </VStack>
      </Flex>

      {/* Dashboards Section */}
      <Flex 
        direction={{ base: 'column', md: 'row' }} // Stack vertically on mobile, horizontally on larger screens
        justifyContent="space-between" 
        alignItems={{ base: 'start', md: 'center' }} 
        mt={10}
      >
        <RouterLink to="/admin/home">
          <HStack spacing={3} color="#001D3D" mb={{ base: 4, md: 0 }}>
            <FaUserGraduate />
            <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight='bold'>Admin Dashboard</Text>
          </HStack>
        </RouterLink>
        
        <RouterLink to="/staff/home">
          <HStack spacing={3} color="#001D3D" mb={{ base: 4, md: 0 }}>
            <FaUserGraduate />
            <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight='bold'>Staff Dashboard</Text>
          </HStack>
        </RouterLink>
        
        <RouterLink to="/student/studprof">
          <HStack spacing={3} color="#001D3D">
            <FaUserGraduate />
            <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight='bold'>Student Dashboard</Text>
          </HStack>
        </RouterLink>
      </Flex>
    </Box>
  )
}

export default Footer
