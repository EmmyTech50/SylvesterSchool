import React from 'react'
import { CalendarIcon } from '@chakra-ui/icons'
import { Avatar, Box, HStack, Text, VStack } from '@chakra-ui/react'
import {Link } from 'react-router-dom'
import { FaChalkboardTeacher, FaMoneyCheckAlt, FaUserGraduate } from 'react-icons/fa'

function SideBar() {
  return (
    <Box bg="blue.900" color="white" p={4}>
        <VStack spacing={5}>
            <Avatar size="lg" name="User Name" src="https://bit.ly/ryan-florence" />
            <Text fontSize="lg" fontWeight="bold">Dashboard</Text>
            <VStack spacing={3} mb='2' mt='2' color='#ffff' alignItems="flex-start">
            <Link to="/admin/home">
                <HStack spacing={3}>
                <FaUserGraduate />
                <Text>Home</Text>
                </HStack>
            </Link>

            <Link to="/admin/profile">
                <HStack spacing={3}>
                <FaUserGraduate />
                <Text>Profile</Text>
                </HStack>
            </Link>

            <Link to="/admin/teachers">
                <HStack spacing={3}>
                <FaChalkboardTeacher />
                <Text>Teachers & Staff</Text>
                </HStack>
            </Link>

            <Link to="/admin/result">
                <HStack spacing={3}>
                <CalendarIcon />
                <Text>Result Entry</Text>
                </HStack>
            </Link>

            <Link to="/admin/tokens">
                <HStack spacing={3}>
                <FaMoneyCheckAlt />
                <Text>Tokens and Pin</Text>
                </HStack>
            </Link>
            </VStack>


        </VStack>
    </Box>
  )
}

export default SideBar
                
            

            
            

            