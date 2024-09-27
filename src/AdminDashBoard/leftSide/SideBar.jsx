import React from 'react'
import { CalendarIcon } from '@chakra-ui/icons'
import { Avatar, Box, Text, VStack } from '@chakra-ui/react'
import {Link } from 'react-router-dom'
import { FaChalkboardTeacher, FaMoneyCheckAlt, FaUserGraduate } from 'react-icons/fa'

function SideBar() {
  return (
    <Box bg="blue.900" color="white" p={4}>
        <VStack spacing={5}>
            <Avatar size="lg" name="User Name" src="https://bit.ly/ryan-florence" />
            <Text fontSize="lg" fontWeight="bold">Dashboard</Text>

            <VStack spacing={3} mb='2' mt='2' color='#ffff'>
            
                <Link to="/admin/home">
                    <FaUserGraduate />
                    <Text>Home</Text>
                </Link>
                <Link to="/admin/profile">
                    <FaUserGraduate />
                    <Text>Profile</Text>
                </Link>
                
                <Link to="/admin/teachers">
                    <FaChalkboardTeacher/>
                    <Text>Teachers & Staff</Text>
                </Link>
                
                <Link to="/admin/result">
                    <CalendarIcon />
                    <Text >Result Entry</Text>
                </Link>

                <Link to="/admin/tokens">
                    <FaMoneyCheckAlt />
                    <Text>Tokens and Pin</Text>
                </Link>
                
            </VStack>

        </VStack>
    </Box>
  )
}

export default SideBar
                
            

            
            

            