import React, { useState } from 'react'
// import { Pane, Card, Heading, Button, EditIcon } from 'evergreen-ui'
import { Box, Container, Heading, VStack } from '@chakra-ui/react'

import TaxForm from './TaxForm'
import Preview from './Preview'
import generateStepsMD, { State } from './generator'

function App() {
  const [md, setMd] = useState<string>('')

  //     <Card elevation={2} marginX="auto" maxWidth="960px" padding="15px" background="white">
  //       <Button iconBefore={EditIcon} appearance="minimal" onClick={() => setMd(null)}>
  //         ფორმის ჩასწორება
  //       </Button>

  //       <Preview md={md} />
  //     </Card>
  //   ) : (

  const handleSubmit = (state: State) => {
    setMd(generateStepsMD(state))
  }

  return (
    <Box minHeight="100vh" padding="4">
      {md ? (
        <div>preview</div>
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
            <TaxForm onSubmit={handleSubmit} />
          </Box>
        </Container>
      )}
    </Box>
  )
}

export default App
