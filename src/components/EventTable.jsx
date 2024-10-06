import { Box, Flex, Heading, IconButton, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

// Sample event data
const events = [
  { id: 1, name: 'Home Decor Range', date: '13 Mar 2024', color: 'green.500' },
  { id: 2, name: 'Disney Princess Pink Bag 15\'', date: '13 Mar 2024', color: 'black' },
  { id: 3, name: 'Bathroom Essentials', date: '13 Mar 2024', color: 'yellow.500' },
  { id: 4, name: 'Apple Smartwatches', date: '13 Mar 2024', color: 'gray.400' }
];

function EventTable({icon }) {
  return (
    <>
    {/* Header section with title and add button */}
    <Flex justifyContent="space-between" mb='3'>
    <Heading fontSize="lg" fontWeight="bold" color="#001D3D">Events</Heading>
         { !icon  ? "" : <IconButton icon={icon} bg="#001D3D"/>  }
    </Flex>

    {/* Event Table */}
    <Table variant="simple">
    <Thead>
        <Tr>
        <Th>#</Th>
        <Th>Name</Th>
        <Th textAlign="right">Date</Th>
        </Tr>
    </Thead>
    <Tbody>
        {events.map((event, index) => (
        <Tr key={event.id}>
            <Td>{index + 1}</Td>
            <Td>
            <Link to={`/event/${event.id}`}>
                <Text color={event.color} fontWeight="bold">{event.name}</Text>
            </Link>
            </Td>
            <Td textAlign="right">{event.date}</Td>
        </Tr>
        ))}
    </Tbody>
    </Table>
    </>

  );
}
export default EventTable;
    


