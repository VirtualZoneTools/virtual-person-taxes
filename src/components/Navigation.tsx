import { FC } from 'react'
import { Link, useMatch } from 'react-router-dom'
import { Box, Button, ButtonGroup, Icon } from '@chakra-ui/react'
import { FaMoneyBillWave, FaPiggyBank } from 'react-icons/fa'

export const Navigation: FC = () => {
  const match = useMatch('/:page')

  return (
    <Box as="nav">
      <ButtonGroup isAttached colorScheme="orange" size="sm">
        <Button
          as={Link}
          to="/dividend"
          variant={match?.params.page === 'dividend' ? 'solid' : 'outline'}
          leftIcon={<Icon as={FaMoneyBillWave} />}
        >
          დივიდენდი
        </Button>
        <Button
          as={Link}
          to="/declaration"
          variant={match?.params.page === 'declaration' ? 'solid' : 'outline'}
          leftIcon={<Icon as={FaPiggyBank} />}
        >
          დეკლარაცია
        </Button>
      </ButtonGroup>
    </Box>
  )
}

export default Navigation
