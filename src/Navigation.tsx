import React from 'react'
import { Icon, Button, VStack, Text, ButtonGroup } from '@chakra-ui/react'
import { FaPiggyBank, FaMoneyBillWave } from 'react-icons/fa'

const Navigation: React.FC = () => {
  return (
    <ButtonGroup isAttached variant="outline">
      <Button height="20">
        <VStack>
          <Icon as={FaMoneyBillWave} w={6} h={6} />
          <Text>დივიდენდი</Text>
        </VStack>
      </Button>

      <Button height="20">
        <VStack>
          <Icon as={FaPiggyBank} w={6} h={6} />
          <Text>დეკლარაცია</Text>
        </VStack>
      </Button>
    </ButtonGroup>
  )
}

export default Navigation
