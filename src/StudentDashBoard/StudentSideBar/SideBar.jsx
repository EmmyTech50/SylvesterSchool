import React from 'react'
import { CalendarIcon } from '@chakra-ui/icons'
import { Avatar, Box, HStack, Text, VStack } from '@chakra-ui/react'
import {Link } from 'react-router-dom'
import { FaUserGraduate } from 'react-icons/fa'

function SideBar() {
  return (
    <Box bg="#001D3D" color="white" p={4}>
    <VStack spacing={5}>
        <Avatar size="lg" name="User Name" src="https://bit.ly/ryan-florence" />
        <Text fontSize="lg" fontWeight="bold">Dashboard</Text>
        <VStack spacing={3} mb='2' mt='2' color='#ffff' alignItems="flex-start">
        
            <Link to="/student/studprof">
                <HStack spacing={3}>
                <FaUserGraduate />
                <Text>Profile</Text>
                </HStack>
            </Link>

            <Link to="/student/studres">
                <HStack spacing={3}>
                <CalendarIcon />
                <Text>Result Entry</Text>
                </HStack>
            </Link>

            <Link to="/student/login">
                <HStack spacing={3}>
                <CalendarIcon />
                <Text>LogOut</Text>
                </HStack>
            </Link>
        </VStack>
    </VStack>
</Box>
  )
}

export default SideBar

      


        

