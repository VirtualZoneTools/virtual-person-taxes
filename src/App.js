import React, { useState } from 'react'
import { Pane } from 'evergreen-ui'

import TaxForm from './TaxForm'
import Preview from './Preview'
import useMedia from './useMedia'
import generateStepsMD from './generator'

function App() {
  const [md, setMd] = useState(`### ინსტრუქციები გამოჩნდება აქ მას შემდეგ რაც ფორმას შეავსებთ`)
  const [col1, col2, overflow, flexWrap] = useMedia(
    ['(max-width: 768px)'],
    [['100%', '100%', 'auto', 'wrap']],
    ['40%', '60%', 'hidden', 'nowrap'],
  )
  return (
    <Pane
      className="App"
      background="tint2"
      overflow={overflow}
      height="100vh"
      width="100vw"
      display="flex"
      flexWrap={flexWrap}
    >
      <Pane flex={`0 0 ${col1}`} maxHeight="100%" padding="15px" overflow="auto">
        <TaxForm onSubmit={values => setMd(generateStepsMD(values))} />
      </Pane>
      <Pane borderLeft flex={`0 0 ${col2}`} padding="15px" overflow="auto">
        <Preview md={md} />
      </Pane>
    </Pane>
  )
}

export default App
