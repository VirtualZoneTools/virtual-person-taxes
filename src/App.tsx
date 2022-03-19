import React, { useState } from 'react'
import { Box, Button, Container, Heading, Stack, VStack } from '@chakra-ui/react'
import { FiEdit3 } from 'react-icons/fi'

import TaxForm from './TaxForm'
import Preview from './Preview'

export interface FormState {
  fullName: string
  address: string
  personalNumber: string
  transactions: Array<any>
}

const App: React.VFC = () => {
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
    <Box minHeight="100vh" padding="4">
      {!isEditing && formState ? (
        <Container as={Stack} maxW="container.md" spacing="4">
          <Button
            colorScheme="blue"
            leftIcon={<FiEdit3 />}
            type="submit"
            onClick={handleEdit}
            // TODO: validation
            // disabled={isSubmitting || !isValid}
          >
            ფორმის ჩასწორება
          </Button>

          <Preview data={formState} />
        </Container>
      ) : (
        <Container as={VStack} maxW="container.sm" spacing="4">
          <Heading as="h2" size="md">
            ინსტრუქციის მისაღებად შეავსეთ ფორმა
          </Heading>

          <Box
            maxW="sm"
            borderWidth="2px"
            borderColor="gray.400"
            backgroundColor="gray.50"
            boxShadow="lg"
            borderRadius="lg"
            p={3}
          >
            <TaxForm data={formState} onSubmit={handleSubmit} />
          </Box>
        </Container>
      )}
    </Box>
  )
}

export default App
