import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { HashRouter } from 'react-router-dom'

import theme from './theme'
import App from './components/App'

createRoot(document.body.appendChild(document.createElement('div'))).render(
  <HashRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </HashRouter>,
)
