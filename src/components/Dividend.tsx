import { FC, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import D from 'decimal.js'
import {
  Box,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tooltip,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { BiHappy, BiMoney, BiMoveHorizontal, BiSad } from 'react-icons/bi'

import Navigation from './Navigation'

interface DividendState {
  amount?: number
  mod: number
}

const INITIAL_STATE: DividendState = {
  amount: undefined,
  mod: 40,
}

const Dividend: FC = () => {
  const { control, register, watch } = useForm({
    defaultValues: INITIAL_STATE,
  })

  const sliderThumbBgColor = useColorModeValue('white', 'gray.200')
  const sliderThumbIconColor = useColorModeValue('black', 'gray.800')

  const [amount, mod] = watch(['amount', 'mod'])

  const [dividend, tax, remaining] = useMemo(() => {
    if (amount === undefined || mod === undefined || mod === 0) {
      return [undefined, undefined, undefined]
    }

    try {
      const tax = new D(new D(amount).minus(new D(amount).mod(mod))).mul(0.05)
      const dividend = new D(new D(amount).minus(new D(amount).mod(mod))).mul(0.95)

      const remaining = new D(amount).minus(dividend).minus(tax)

      return [dividend, tax, remaining].map((x) => x.toFixed(2))
    } catch (e) {
      return [undefined, undefined, undefined]
    }
  }, [amount, mod])

  return (
    <VStack spacing="4" padding={4}>
      <Navigation />

      <Stack spacing="4" minWidth="xs">
        <FormControl>
          <FormLabel>გასატანი თანხა</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<Icon as={BiMoney} />} />
            <Input type="number" placeholder="მაგ. 10000" {...register('amount')} min="0" />
            <InputRightAddon>₾</InputRightAddon>
          </InputGroup>
        </FormControl>

        <Controller
          name="mod"
          control={control}
          render={(props) => (
            <FormControl>
              <FormLabel>დანაშთვა</FormLabel>

              <Slider
                colorScheme="blue"
                aria-label="slider-ex-4"
                defaultValue={40}
                min={0}
                step={4}
                max={100}
                onChange={props.field.onChange}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>

                <Tooltip isOpen placement="top" offset={[0, 2]} label={`${props.field.value}₾`}>
                  <SliderThumb boxSize={6} bg={sliderThumbBgColor} color={sliderThumbIconColor}>
                    <Icon as={BiMoveHorizontal} />
                  </SliderThumb>
                </Tooltip>

                {[0, 20, 40, 60, 80, 100].map((value) => (
                  <SliderMark
                    key={value}
                    value={value}
                    width={6}
                    ml={-3}
                    mt={3}
                    textAlign="center"
                    fontSize="xs"
                    opacity={0.4}
                  >
                    {value}
                  </SliderMark>
                ))}
              </Slider>
            </FormControl>
          )}
        />

        <Box height={2} />

        {dividend !== undefined && tax !== undefined && (
          <>
            <StatGroup textAlign="center">
              <Stat>
                <StatLabel>დივიდენდი 95%</StatLabel>
                <StatNumber color="green.500">{dividend}₾</StatNumber>
                <StatHelpText>
                  <Icon as={BiHappy} fontSize={24} color="green.500" opacity={0.8} />
                </StatHelpText>
              </Stat>

              <Stat>
                <StatLabel>გადასახადი 5%</StatLabel>
                <StatNumber color="red.500">{tax}₾</StatNumber>
                <StatHelpText>
                  <Icon as={BiSad} fontSize={24} color="red.500" opacity={0.8} />
                </StatHelpText>
              </Stat>
            </StatGroup>

            <Box transform={['scale(0.8)']} opacity={0.7}>
              <StatGroup textAlign="center">
                <Stat>
                  <StatLabel>ნაშთი ანგარიშზე</StatLabel>
                  <StatNumber>{remaining}₾</StatNumber>
                </Stat>
              </StatGroup>
            </Box>
          </>
        )}
      </Stack>
    </VStack>
  )
}

export default Dividend
