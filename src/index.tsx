import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

import theme from './theme'
import App from './components/App'

createRoot(document.body.appendChild(document.createElement('div'))).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
)
