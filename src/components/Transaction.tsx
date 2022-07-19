import { FC } from 'react'
import { DeepRequired, FieldErrorsImpl, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { DayPicker } from 'react-day-picker'
import FocusLock from 'react-focus-lock'
import { format } from 'date-fns'
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

import { FormState } from './App'

interface TransactionProps {
  index: number
  transaction: FormState['transactions'][0]
  errors: FieldErrorsImpl<DeepRequired<FormState>>
  isOnly: boolean
  onRemove: (index: number) => void
  register: UseFormRegister<FormState>
  setValue: UseFormSetValue<FormState>
}

const Transaction: FC<TransactionProps> = ({
  index,
  errors,
  isOnly,
  onRemove,
  register,
  setValue,
  transaction,
}) => {
  const { onOpen, onClose, isOpen } = useDisclosure()

  const dateInputFormProps = { ...register(`transactions.${index}.date`) }

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
                  placeholder="მაგ. Mar 19, 2022"
                  {...dateInputFormProps}
                  {...register(`transactions.${index}.date`)}
                />
              </InputGroup>
            </PopoverTrigger>

            <PopoverContent>
              <FocusLock returnFocus persistentFocus={false}>
                <PopoverArrow />

                <DayPicker
                  mode="single"
                  selected={transaction.date}
                  onSelect={(date: Date | undefined) =>
                    date && setValue(`transactions.${index}.date`, date)
                  }
                />
              </FocusLock>
            </PopoverContent>
          </Popover>
          {errors.transactions?.[index]?.date?.message && (
            <FormErrorMessage>{errors.transactions?.[index]?.date?.message}</FormErrorMessage>
          )}
        </FormControl>
      </VStack>
    </Box>
  )
}

export default Transaction
