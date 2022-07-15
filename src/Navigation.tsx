import { FC } from 'react'
import { Box, Button, ButtonGroup, Flex, HStack, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaMoneyBillWave, FaPiggyBank } from 'react-icons/fa'

export const Navigation: FC = () => {
  return (
    <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
      <HStack spacing="10" justify="space-between">
        <Flex justify="space-between" flex="1">
          <ButtonGroup variant="ghost" spacing="8">
            <Button leftIcon={<Icon as={FaMoneyBillWave} w={6} h={6} />}>დივიდენდი</Button>
            <Button leftIcon={<Icon as={FaPiggyBank} w={6} h={6} />}>დეკლარაცია</Button>
          </ButtonGroup>
        </Flex>
      </HStack>
    </Box>
  )
}

export default Navigation
