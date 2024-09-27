import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { variables } from '../App'

function EventsCard({evtTitle, evtBgImage, evtDetailText }) {
  return (
    <Box bg="#ffff"  textAlign="center"  borderRadius='20px' boxShadow="md" h='100vh' >
      <Image src={evtBgImage} alt='event' mb='51px' h='50%' w='100%' objectFit='cover' borderTopRadius='20px'/>
      <Text fontSize="xl" fontWeight="bold" mt={4}>{evtTitle}</Text>
      <Text fontSize="xl" fontWeight="bold" mt={7}>{evtDetailText}</Text>
      <Button borderRadius='25px' color='#ffff' bgColor='#842D19' w='310px' mt={10}>VIEW MORE</Button>
    </Box>
  )
}

export default EventsCard