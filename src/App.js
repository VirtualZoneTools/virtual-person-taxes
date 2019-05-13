import React, { useState } from 'react'
import { Pane } from 'evergreen-ui'

import TaxForm from './TaxForm'
import Preview from './Preview'

import generateStepsMD from './generator'

function App() {
  const [md, setMd] = useState(`### ინსტრუქციები გამოჩნდება აქ მას შემდეგ რაც ფორმას შეავსებთ`)

  return (
    <Pane className="App" background="tint2" overflow="hidden" height="100vh" width="100vw">
      <Pane flex="0 0 40%" maxHeight="100%" padding="15px" overflow="auto">
        <TaxForm onSubmit={values => setMd(generateStepsMD(values))} />
      </Pane>
      <Pane borderLeft flex="0 0 60%" padding="15px" overflow="auto">
        <Preview md={md} />
      </Pane>
    </Pane>
  )
}

export default App
