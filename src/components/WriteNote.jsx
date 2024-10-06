import { AddIcon } from '@chakra-ui/icons'
import { Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'

function WriteNote() {
  return (
    <>
        <Flex justifyContent="center" alignItems="center" flexDirection="column" height="100px">
        <Text fontSize="lg" fontWeight="bold">  Write Something </Text>
        <Text fontSize="lg" fontWeight="bold">  to Remember  </Text>
        </Flex>

        <Flex justifyContent="center" alignItems="center" > 
        <IconButton
            icon={<AddIcon />}    
            size="lg"             
            color="#001D3D"    
            aria-label="Add a note"
            variant="#fff"       
            isRound={true}        
        />
        </Flex>
    </>
    
    )
}

export default WriteNote;
 

    