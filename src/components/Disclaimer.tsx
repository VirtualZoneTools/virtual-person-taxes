import { FC } from 'react'
import { Alert, AlertIcon } from '@chakra-ui/react'

const Disclaimer: FC = () => {
  return (
    <Alert status="warning" fontSize="sm" paddingX={3} paddingY={2}>
      <AlertIcon />
      Not a financial advice 😉
      <br />
      Do your own research first!
    </Alert>
  )
}

export default Disclaimer
