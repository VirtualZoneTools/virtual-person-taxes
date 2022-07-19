import { FC, useState } from 'react'
import { Container, Icon, IconButton, Stack, VStack } from '@chakra-ui/react'
import { BiX } from 'react-icons/bi'

import TaxForm from './TaxForm'
import Preview from './Preview'
import Navigation from './Navigation'

export interface FormState {
  fullName: string
  address: string
  personalNumber: string
  transactions: {
    date?: Date
    amount?: number
  }[]
}

const App: FC = () => {
  const [formState, setFormState] = useState<FormState>()
  const [isEditing, setEditing] = useState(false)

  const handleSubmit = (state: FormState) => {
    setFormState(state)
    setEditing(false)
  }

  const handleEdit = () => {
    setEditing(true)
  }

  return (
    <>
      {!isEditing && formState ? (
        <Container as={Stack} maxW="container.md" paddingY={4} paddingX={8}>
          <IconButton
            aria-label="რედაქტირება"
            size="md"
            variant="ghost"
            colorScheme="blue"
            borderRadius="full"
            icon={<Icon as={BiX} />}
            onClick={handleEdit}
            position="absolute"
            right={4}
            top={4}
          />

          <Preview data={formState} />
        </Container>
      ) : (
        <>
          <Navigation />

          <VStack spacing="4" padding={4}>
            <TaxForm data={formState} onSubmit={handleSubmit} />
          </VStack>
        </>
      )}
    </>
  )
}

export default App
