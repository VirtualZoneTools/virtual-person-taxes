import {
  extendTheme,
  useColorModeValue,
  type ThemeConfig,
  type ComponentStyleConfig,
} from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const GlobalStyle = {
  'html, body': {
    // backgroundColor: (...props: any) => ,
  },
  '.chakra-input__group .chakra-icon': {
    opacity: 0.75,
  },
}

const FormLabel: ComponentStyleConfig = {
  baseStyle: () => ({
    fontSize: 'sm',
    color: useColorModeValue('gray.600', 'gray.400'), // eslint-disable-line
  }),
}

const Input: ComponentStyleConfig = {
  defaultProps: {
    size: 'sm',
  },
}

const overridedTheme = extendTheme({
  styles: {
    global: GlobalStyle,
  },
  config,

  // component overrdes
  components: {
    // Icon,
    FormLabel,
    Input,
  },
})

export default overridedTheme
