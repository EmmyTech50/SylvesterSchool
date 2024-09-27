import { Box, Button, Flex, HStack, Image, Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import { variables } from '../App'

function NavBar() {
  return (
     /* Navbar */
    <Flex
      as="nav"  
      bg="#842D19" 
      paddingInline={variables.containerMargin} 
      justify="space-between" 
      align="center"
    >
      <Box>
       
          <Image src='src/IconFolder/schoolLogo.png' mt='2' mb='2'/>
      </Box>

      <Box>
        <HStack spacing={3} mb='2' mt='2' color='#ffff'>
          <Link to="/">Home</Link>
          <Link to="/admission">Admission</Link>
          <Link to="/academics">Academics</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        
        </HStack>
        <Input placeholder="Search" bgColor="white"  mb='2'/>
      </Box>
       
    </Flex>
  )
}

export default NavBar