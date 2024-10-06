import { AddIcon } from '@chakra-ui/icons';
import { Avatar, Box, Flex, HStack, IconButton, Input, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { FaCommentAlt } from 'react-icons/fa';
import { variables } from '../App';

// Sample teacher data
const teachers = [
    {
      id: 1,
      name: 'Jane Cooper',
      role: 'Form Teacher',
      avatar: 'https://bit.ly/sage-adebayo', // Placeholder avatar URL
    },
    {
      id: 2,
      name: 'Jane Cooper',
      role: 'Maths Teacher',
      avatar: 'https://bit.ly/dan-abramov', // Placeholder avatar URL
    },
  ];
  
function SearchTeachers() {
  return (
    <>
    <Input
        fontWeight="bold" 
        fontSize="lg" 
        color="#001D3D"
        placeholder="Search Teacher"
        mb={4}
        bg={variables.primaryColor2}
        borderColor="gray.300"
        focusBorderColor="purple.500"
        rounded="full"
    />

    <VStack spacing={4} align="stretch">
        {teachers.map((teacher) => (
        <HStack
            key={teacher.id}
            p={3}
            rounded="lg"
            justifyContent="space-between"
            boxShadow="sm"
            color="#001D3D"
        >
            <HStack>
            <Avatar size="md" src={teacher.avatar} name={teacher.name} color="#001D3D"/>
            <VStack align="start" spacing={0}>
                <Text fontWeight="bold" fontSize="md" color="#001D3D">{teacher.name}</Text>
                <Text fontSize="sm" color="#001D3D">{teacher.role}</Text>
            </VStack>
            </HStack>

            <IconButton
            icon={<FaCommentAlt />}
            size="md"
            color="#001D3D"
            variant="#ffff"
            aria-label="Message Teacher"
            />
        </HStack>
        ))}
    </VStack>
  </>  
)
}

export default SearchTeachers;
    

        
        
        
        