import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'gray.50',
      },
    },
  },
  config,
})

export default theme
