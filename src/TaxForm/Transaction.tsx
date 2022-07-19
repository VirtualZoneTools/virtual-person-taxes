import { FC } from 'react'

import { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { DayPicker } from 'react-day-picker'
import FocusLock from 'react-focus-lock'
import { format } from 'date-fns'
import {
  Box,
  FormControl,
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

import { FormState } from '../App'

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

const Transaction: FC<TransactionProps> = ({
  index,
  isOnly,
  isLast,
  onRemove,
  register,
  setValue,
}) => {
  const { onOpen, onClose, isOpen } = useDisclosure()

  const dateInputFormProps = { ...register(`transactions.${index}.date`) }

  return (
    <Box
      p={3}
      width="full"
      borderWidth="1px"
      borderColor={useColorModeValue('gray.200', 'whiteAlpha.300')}
      // backgroundColor="gray.50"
      borderRadius="sm"
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

        <FormControl isRequired>
          <FormLabel>დივიდენდის რაოდენობა</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<Icon as={BiMoney} />} />
            <Input placeholder="მაგ. 10000" {...register(`transactions.${index}.amount`)} />
            <InputRightAddon>₾</InputRightAddon>
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>თარიღი</FormLabel>

          <Popover
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            placement="auto"
            closeOnBlur={true}
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<Icon as={BiCalendar} />} />
              <Input
                type="date"
                placeholder="მაგ. Mar 19, 2022"
                {...dateInputFormProps}
                {...register(`transactions.${index}.date`)}
              />
            </InputGroup>
            {/* </PopoverTrigger> */}

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
      </VStack>
    </Box>
  )
}

export default Transaction
