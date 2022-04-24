import { extendTheme, type ThemeConfig, type ComponentStyleConfig } from '@chakra-ui/react'

const Icon: ComponentStyleConfig = {
  baseStyle: {
    color: 'green',
  },
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  Icon,
})

export default theme
