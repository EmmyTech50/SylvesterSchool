import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

function EventsCard({ evtTitle, evtBgImage, evtDetailText }) {
  return (
    <Box bg="#ffff" textAlign="center" borderRadius='20px' boxShadow="md" h={{ base: 'auto', md: '100vh' }}>
      <Image 
        src={evtBgImage} 
        alt='event' 
        mb='51px' 
        h={{ base: 'auto', md: '50%' }} 
        w='100%' 
        objectFit='cover' 
        borderTopRadius='20px' 
      />
      <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mt={4}>{evtTitle}</Text>
      <Text fontSize={{ base: 'md', md: 'xl' }} fontWeight="bold" mt={7}>{evtDetailText}</Text>
      <Button 
        borderRadius='25px' 
        color='#ffff' 
        bgColor='#842D19' 
        w={{ base: '200px', md: '310px' }}  // Adjust button width for mobile
        mt={10}
        mb={10}
      >
        VIEW MORE
      </Button>
    </Box>
  )
}

export default EventsCard
