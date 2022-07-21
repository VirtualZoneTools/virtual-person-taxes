import { FC } from 'react'
import { DayPicker } from 'react-day-picker'
import FocusLock from 'react-focus-lock'
import { sub } from 'date-fns'
import {
  Control,
  Controller,
  DeepRequired,
  FieldErrorsImpl,
  UseFormRegister,
} from 'react-hook-form'
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Tag,
  Tooltip,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { BiCalendar, BiMoney, BiX } from 'react-icons/bi'

import { formatDate } from '../utils/dateUtils'
import { FormState } from '../utils/state'

interface DeclarationTransactionProps {
  index: number
  isOnly: boolean
  errors: FieldErrorsImpl<DeepRequired<FormState>>
  register: UseFormRegister<FormState>
  control: Control<FormState, object>
  onRemove: (index: number) => void
}

const DeclarationTransaction: FC<DeclarationTransactionProps> = ({
  index,
  isOnly,
  errors,
  register,
  control,
  onRemove,
}) => {
  const { onOpen, onClose, isOpen } = useDisclosure()

  return (
    <Box
      padding={3}
      width="full"
      borderWidth="1px"
      borderRadius="sm"
      borderColor={useColorModeValue('gray.200', 'whiteAlpha.300')}
      shadow="sm"
      position="relative"
    >
      {!isOnly && (
        <Box position="absolute" top="2" right="2">
          <Tooltip label="ტრანზაქციის წაშლა" placement="top">
            <IconButton
              aria-label="ტრანზაქციის წაშლა"
              size="sm"
              colorScheme="red"
              variant="ghost"
              borderRadius="full"
              icon={<Icon as={BiX} />}
              onClick={() => onRemove(index)}
            />
          </Tooltip>
        </Box>
      )}

      <VStack spacing="2">
        <Tag colorScheme="orange" textAlign="center" alignItems="center">
          ტრანზაქცია #{index + 1}
        </Tag>

        <FormControl isInvalid={!!errors.transactions?.[index]?.amount}>
          <FormLabel>დივიდენდის რაოდენობა</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<Icon as={BiMoney} />} />
            <Input
              type="number"
              placeholder="მაგ. 10000"
              {...register(`transactions.${index}.amount`)}
            />
            <InputRightAddon>₾</InputRightAddon>
          </InputGroup>
          {errors.transactions?.[index]?.amount?.message && (
            <FormErrorMessage>{errors.transactions?.[index]?.amount?.message}</FormErrorMessage>
          )}
        </FormControl>

        <Controller
          name={`transactions.${index}.date`}
          control={control}
          render={(props) => (
            <FormControl isInvalid={!!errors.transactions?.[index]?.date}>
              <FormLabel>თარიღი</FormLabel>
              <Popover
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                placement="auto"
                closeOnBlur={true}
              >
                <PopoverTrigger>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" children={<Icon as={BiCalendar} />} />
                    <Input
                      readOnly
                      value={props.field.value ? formatDate(props.field.value) : ''}
                      placeholder="მაგ. Mar 19, 2022"
                    />
                  </InputGroup>
                </PopoverTrigger>

                <PopoverContent>
                  <FocusLock returnFocus persistentFocus={false}>
                    <PopoverArrow />

                    <DayPicker
                      defaultMonth={sub(new Date(), { months: 1 })}
                      toDate={new Date()}
                      mode="single"
                      selected={props.field.value}
                      onSelect={(date) => {
                        props.field.onChange(date)
                        onClose()
                      }}
                    />
                  </FocusLock>
                </PopoverContent>
              </Popover>
              {props.fieldState.error && (
                <FormErrorMessage>{props.fieldState.error.message}</FormErrorMessage>
              )}
            </FormControl>
          )}
        />
      </VStack>
    </Box>
  )
}

export default DeclarationTransaction
