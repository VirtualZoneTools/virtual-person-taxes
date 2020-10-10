import React, { useState } from 'react'
import { Pane, Card, Heading, Button, EditIcon } from 'evergreen-ui'

import TaxForm from './TaxForm'
import Preview from './Preview'
import generateStepsMD from './generator'

function App() {
  const [md, setMd] = useState()

  return (
    <Pane background="tint2" minHeight="100vh" padding="30px">
      {md ? (
        <Card elevation={2} marginX="auto" maxWidth="960px" padding="15px" background="white">
          <Button iconBefore={EditIcon} appearance="minimal" onClick={() => setMd(null)}>
            ფორმის ჩასწორება
          </Button>

          <Preview md={md} />
        </Card>
      ) : (
        <Pane display="flex" flexDirection="column" alignItems="center">
          <Heading size={400} marginBottom="15px">
            ინსტრუქციის მისაღებად შეავსეთ ფორმა
          </Heading>

          <Card
            elevation={2}
            background="tint1"
            padding="15px"
            overflow="auto"
            minWidth="360px"
            maxWidth="600px"
          >
            <TaxForm onSubmit={values => setMd(generateStepsMD(values))} />
          </Card>
        </Pane>
      )}
    </Pane>
  )
}

export default App
