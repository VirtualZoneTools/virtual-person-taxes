import React, { useState } from 'react'
import { Box, Button, Container, Heading, Icon, Stack, VStack } from '@chakra-ui/react'
import { FaEdit } from 'react-icons/fa'

import TaxForm from './TaxForm'
import Preview from './Preview'
import Navigation from './Navigation'

export interface FormState {
  fullName: string
  address: string
  personalNumber: string
  transactions: Array<any>
}

const App: React.FC = () => {
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
        <Container
          as={Stack}
          maxW="container.md"
          spacing="4"
          borderWidth="2px"
          borderColor="gray.400"
          boxShadow="lg"
          borderRadius="lg"
          py={4}
          px={12}
        >
          <Button
            width="min"
            size="sm"
            variant="outline"
            leftIcon={<Icon as={FaEdit} />}
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
          <Navigation />

          <Heading as="h2" size="sm">
            ინსტრუქციის მისაღებად შეავსეთ ფორმა
          </Heading>

          <TaxForm data={formState} onSubmit={handleSubmit} />
        </Container>
      )}
    </Box>
  )
}

export default App
