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
  html: {
    backgroundColor: () => useColorModeValue('gray.50', 'blackAlpha.500'), // eslint-disable-line
  },
  body: {
    backgroundColor: 'transparent',
  },
  '.chakra-input__group .chakra-icon': {
    opacity: 0.75,
  },

  '.chakra-form-control .chakra-form__label': {
    marginBottom: 1,
  },
}

const FormLabel: ComponentStyleConfig = {
  baseStyle: () => ({
    fontSize: 'sm',
    color: useColorModeValue('gray.600', 'whiteAlpha.500'), // eslint-disable-line
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
