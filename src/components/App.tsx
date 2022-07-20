import { FC, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Container, Icon, IconButton, Stack, VStack } from '@chakra-ui/react'
import { BiX } from 'react-icons/bi'

import { FormState } from '../utils/state'
import TaxForm from './TaxForm'
import Preview from './Preview'
import Navigation from './Navigation'

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
          <VStack spacing="4" padding={4}>
            <Navigation />

            <Routes>
              <Route path="/dividend" element={<div>test</div>} />
              <Route
                path="/declaration"
                element={<TaxForm data={formState} onSubmit={handleSubmit} />}
              />
              <Route path="/" element={<Navigate to="/declaration" />} />
            </Routes>
          </VStack>
        </>
      )}
    </>
  )
}

export default App
