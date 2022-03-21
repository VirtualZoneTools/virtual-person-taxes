import React from 'react'
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
import { UseFormRegister } from 'react-hook-form'
import { DayPicker } from 'react-day-picker'
import FocusLock from 'react-focus-lock'

import { FormState } from '../App'
import { FaCalendarAlt, FaMoneyBillWave, FaTrashAlt } from 'react-icons/fa'

interface TransactionProps {
  index: number
  isOnly: boolean
  isLast: boolean
  onRemove: (index: number) => void
  onAppend: () => void
  register: UseFormRegister<FormState>
}

const Transaction: React.VFC<TransactionProps> = ({
  index,
  isOnly,
  isLast,
  onRemove,
  register,
}) => {
  const { onOpen, onClose, isOpen } = useDisclosure()

  const dateInputFormProps = { ...register(`transactions.${index}.date`, { required: true }) }

  return (
    <Box
      as={Stack}
      spacing="2"
      width="full"
      borderWidth="1px"
      borderColor="gray.400"
      borderRadius="lg"
      shadow="md"
      p={3}
      paddingBottom={isLast ? 6 : undefined}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h3" size="sm">
          ტრანზაქცია #{index + 1}
        </Heading>

        <Tooltip label="ტრანზაქციის წაშლა" placement="right">
          <IconButton
            aria-label="ტრანზაქციის წაშლა"
            size="sm"
            colorScheme="red"
            // variant="outline"
            icon={<Icon as={FaTrashAlt} />}
            borderRadius="full"
            disabled={isOnly}
            onClick={() => onRemove(index)}
          />
        </Tooltip>
      </Box>

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
          placement="right-end"
          closeOnBlur={true}
        >
          <PopoverTrigger>
            <InputGroup>
              <InputLeftAddon pointerEvents="none" children={<Icon as={FaCalendarAlt} />} />
              <Input placeholder="მაგ. Mar 19, 2022" {...dateInputFormProps} />
            </InputGroup>
          </PopoverTrigger>

          <PopoverContent boxShadow="lg" scale="0.6">
            <FocusLock returnFocus persistentFocus={false}>
              <PopoverArrow />

              <DayPicker
                mode="single"
                // {...dateInputFormProps}
              />
            </FocusLock>
          </PopoverContent>
        </Popover>
      </FormControl>
    </Box>
  )
}

export default Transaction
