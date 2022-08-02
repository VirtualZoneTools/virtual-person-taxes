import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { HashRouter } from 'react-router-dom'

import theme from './theme'
import App from './components/App'
import { DeclarationProvider } from './contexts/DeclarationContext'

createRoot(document.body.appendChild(document.createElement('div'))).render(
  <HashRouter>
    <ChakraProvider theme={theme}>
      <DeclarationProvider>
        <App />
      </DeclarationProvider>
    </ChakraProvider>
  </HashRouter>,
)
