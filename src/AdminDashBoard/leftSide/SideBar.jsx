import React from 'react';
import { CalendarIcon } from '@chakra-ui/icons';
import { Avatar, Box, HStack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaMoneyCheckAlt, FaUserGraduate } from 'react-icons/fa';

function SideBar() {
  return (
    <Box bg="#001D3D" color="white" p={4} minH="100vh">
      <VStack spacing={5} alignItems="flex-start" display={{ base: 'block', md: 'flex' }}>
        <Avatar size="lg" name="User Name" src="https://bit.ly/ryan-florence" />
        <Text fontSize={{ base: 'xl', md: 'lg' }} fontWeight="bold">Dashboard</Text>
        <VStack spacing={3} mb='2' mt='2' color='#ffff' wrap={{ base: 'wrap', md: 'nowrap' }}>
          {[
            { to: "/admin/home", icon: <FaUserGraduate />, label: "Home" },
            { to: "/admin/profile", icon: <FaUserGraduate />, label: "Profile" },
            { to: "/admin/teachers", icon: <FaChalkboardTeacher />, label: "Teachers & Staff" },
            { to: "/admin/result", icon: <CalendarIcon />, label: "Result Entry" },
            { to: "/admin/tokens", icon: <FaMoneyCheckAlt />, label: "Tokens and Pin" },
            { to: "/admin/login", icon: <FaMoneyCheckAlt />, label: "Log-Out" },
          ].map(({ to, icon, label }) => (
            <Link to={to} key={label} style={{ width: '100%' }}>
              <HStack
                spacing={3}
                p={2}
                borderRadius="md"
                _hover={{ border: '2px solid white' }}
                _focus={{ border: '2px solid white' }}
                transition="border 0.3s"
              >
                {icon}
                <Text fontSize={{ base: 'md', md: 'lg' }}>{label}</Text>
              </HStack>
            </Link>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
}

export default SideBar;
