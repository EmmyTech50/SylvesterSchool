import { Box, Button, Flex, HStack, Image, Input } from '@chakra-ui/react'
import React from 'react'
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
        <HStack spacing={3} mb='2' mt='2' >
          <Button variant="link" color="white" fontFamily={variables.fonts3}>Admission</Button>
          <Button variant="link" color="white" fontFamily={variables.fonts3}>Academics</Button>
          <Button variant="link" color="white" fontFamily={variables.fonts3}>About</Button>
          <Button variant="link" color="white" fontFamily={variables.fonts3}>Contact</Button>
        
        </HStack>
        <Input placeholder="Search" bgColor="white"  mb='2'/>
      </Box>
       
    </Flex>
  )
}

export default NavBar