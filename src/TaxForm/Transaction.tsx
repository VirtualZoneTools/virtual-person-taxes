import React from 'react'

import { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { DayPicker } from 'react-day-picker'
import FocusLock from 'react-focus-lock'
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  IconButton,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  useDisclosure,
  Stack,
  InputGroup,
  InputLeftElement,
  Icon,
  InputLeftAddon,
} from '@chakra-ui/react'

import { FormState } from '../App'
import { FaCalendarAlt, FaMoneyBillWave, FaTrashAlt } from 'react-icons/fa'
import { format } from 'date-fns'

// TODO separate this
const DATE_FORMAT = 'MMM dd, yyy'

interface TransactionProps {
  index: number
  isOnly: boolean
  isLast: boolean
  onRemove: (index: number) => void
  onAppend: () => void
  register: UseFormRegister<FormState>
  setValue: UseFormSetValue<FormState>
}

const Transaction: React.VFC<TransactionProps> = ({
  index,
  isOnly,
  isLast,
  onRemove,
  register,
  setValue,
}) => {
  const { onOpen, onClose, isOpen } = useDisclosure()

  const dateInputFormProps = { ...register(`transactions.${index}.date`, { required: true }) }

  return (
    <Box
      width="full"
      borderWidth="2px"
      borderColor="gray.700"
      borderRadius="lg"
      shadow="md"
      p={3}
      paddingBottom={isLast ? 6 : undefined}
      position="relative"
    >
      {!isOnly && (
        <Box position="absolute" top="3" right="3" marginTop="0">
          <Tooltip label="ტრანზაქციის წაშლა" placement="right">
            <IconButton
              aria-label="ტრანზაქციის წაშლა"
              size="xs"
              colorScheme="red"
              // variant="outline"
              icon={<Icon as={FaTrashAlt} />}
              borderRadius="full"
              onClick={() => onRemove(index)}
            />
          </Tooltip>
        </Box>
      )}

      <Stack spacing="2">
        <Heading as="h3" size="sm">
          ტრანზაქცია #{index + 1}
        </Heading>

        <FormControl>
          <FormLabel htmlFor={`transactions.${index}.amount`}>დივიდენდის რაოდენობა</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<Icon as={FaMoneyBillWave} />} />

            <Input
              placeholder="მაგ. 10000"
              {...register(`transactions.${index}.amount`, { required: true })}
            />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor={`transactions.${index}.date`}>თარიღი</FormLabel>

          <Popover
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            placement="auto"
            closeOnBlur={true}
          >
            <PopoverTrigger>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<Icon as={FaCalendarAlt} />} />
                <Input
                  placeholder="მაგ. Mar 19, 2022"
                  {...dateInputFormProps}
                  {...register(`transactions.${index}.date`, { required: true })}
                />
              </InputGroup>
            </PopoverTrigger>

            <PopoverContent>
              <FocusLock returnFocus persistentFocus={false}>
                <PopoverArrow />

                <DayPicker
                  mode="single"
                  onSelect={(date: Date | undefined) =>
                    date && setValue(`transactions.${index}.date`, format(date, DATE_FORMAT))
                  }
                  // {...dateInputFormProps}
                />
              </FocusLock>
            </PopoverContent>
          </Popover>
        </FormControl>
      </Stack>
    </Box>
  )
}

export default Transaction
