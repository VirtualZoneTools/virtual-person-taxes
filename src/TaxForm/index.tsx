import React, { useRef, useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  IconButton,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  useDisclosure,
  Stack,
} from '@chakra-ui/react'
import * as Yup from 'yup'
import { format, isValid, parse, sub } from 'date-fns'
import { FiZap, FiPlusCircle, FiTrash2 } from 'react-icons/fi'
import { useFieldArray, useForm, UseFormRegister } from 'react-hook-form'
import { DayPicker } from 'react-day-picker'
import FocusLock from 'react-focus-lock'

import 'react-day-picker/dist/style.css'

import { FormState } from '../App'
import { getReusableData, setReusableData } from '../saveReusableData'

const initialState: FormState = {
  ...getReusableData(),
  transactions: [
    {
      date: '',
      amount: undefined,
    },
  ],
}

const messages = {
  required: () => 'აუცილებელი ველი',
  short: (field: string) => `${field} ძალიან მოკლეა`,
  invalid: (field: string) => `არასწორი ${field}`,
}

const Schema = Yup.object().shape({
  fullName: Yup.string().min(2, messages.short('სახელი')).required(messages.required()),
  address: Yup.string().min(2, messages.short('მისამართი')).required(messages.required()),
  personalNumber: Yup.string()
    .length(11, messages.invalid('პირადი ნომერი'))
    .required(messages.required()),
  transactions: Yup.array().of(
    Yup.object().shape({
      date: Yup.string()
        .min(10, 'თარიღი უნდა იყოს DD/MM/YYYY ფორმატში')
        .required(messages.required()),
      amount: Yup.number().required(messages.required()),
    }),
  ),
})

interface TaxFormProps {
  data?: FormState
  onSubmit: (data: any) => void
}

const TaxForm: React.VFC<TaxFormProps> = ({ data, onSubmit }) => {
  const { control, register, handleSubmit } = useForm({
    defaultValues: data || initialState,
  })
  const {
    fields: transactions,
    append,
    remove,
  } = useFieldArray({
    control,
    name: 'transactions',
  })

  const handleSubmitForm = (values: any) => {
    console.log(values)
    // TODO: stuff...
    setReusableData(values)
    onSubmit(values)
  }

  // const handleInputChange = (e) => {
  //   const { value } = e.currentTarget
  //   setInputValue(value)

  //   const date = parse(value, 'y-MM-dd', new Date())
  //   if (isValid(date)) {
  //     setSelected(date)
  //   } else {
  //     setSelected(undefined)
  //   }
  // }

  const handleRemoveTransaction = (index: number) => {
    remove(index)
  }

  const handleAddTransaction = () => {
    append({ date: '', amount: '' })
  }

  // TODO: implement this.
  // status, isSubmitting, isValid, values

  return (
    <Stack as="form" spacing="4" onSubmit={handleSubmit(handleSubmitForm)}>
      <FormControl>
        <FormLabel htmlFor="fullName">სახელი და გვარი</FormLabel>
        <Input
          type="text"
          backgroundColor="white"
          placeholder="მაგ. გიორგი მაისურაძე"
          {...register('fullName', { required: true, minLength: 2 })}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="address">მისამართი</FormLabel>
        <Input
          type="text"
          backgroundColor="white"
          placeholder="მაგ. რუსთაველის გამზ. 26"
          {...register('address', { required: true, minLength: 2 })}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="personalNumber">პირადი ნომერი</FormLabel>
        <Input
          type="text"
          backgroundColor="white"
          placeholder="მაგ. 01101899998"
          {...register('personalNumber', { required: true, minLength: 11, maxLength: 11 })}
        />
      </FormControl>

      {transactions.map((transaction, index) => (
        <Transaction
          key={transaction.id}
          index={index}
          isOnly={transactions.length === 1}
          isLast={index === transactions.length - 1}
          onRemove={handleRemoveTransaction}
          onAppend={handleAddTransaction}
          register={register}
        />
      ))}

      <Box position="relative">
        <Tooltip label="ტრანზაქციის დამატება" placement="right">
          <IconButton
            aria-label="ტრანზაქციის დამატება"
            colorScheme="green"
            icon={<FiPlusCircle />}
            left="50%"
            top="-8"
            position="absolute"
            transform="translateX(-50%)"
            size="sm"
            borderRadius="full"
            onClick={handleAddTransaction}
          />
        </Tooltip>
      </Box>

      {/* TODO: wsup */}
      {/* {status && status.msg && <Paragraph>{status.msg}</Paragraph>} */}

      <Box display="flex" justifyContent="center">
        <Button
          colorScheme="blue"
          leftIcon={<FiZap />}
          type="submit"
          // TODO: validation
          // disabled={isSubmitting || !isValid}
        >
          ინსტრუქციების გენერირება
        </Button>
      </Box>
    </Stack>
  )
}

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
  const [selected, setSelected] = useState<Date>()

  const { onOpen, onClose, isOpen } = useDisclosure()

  // const handleDaySelect = (date: Date) => {
  //   setSelected(date)

  //   if (date) {
  //     setInputValue(format(date, 'y-MM-dd'))
  //   } else {
  //     setInputValue('')
  //   }
  // }

  const dateInputFormProps = { ...register(`transactions.${index}.date`, { required: true }) }

  return (
    <Box
      as={Stack}
      spacing="4"
      width="full"
      borderWidth="1px"
      borderColor="gray.400"
      backgroundColor="white"
      borderRadius="lg"
      shadow="md"
      p={3}
      paddingBottom={isLast ? 6 : undefined}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="12px">
        <Heading as="h3" size="sm">
          ტრანზაქცია #{index + 1}
        </Heading>

        <Tooltip label="ტრანზაქციის წაშლა" placement="right">
          <IconButton
            aria-label="ტრანზაქციის წაშლა"
            size="sm"
            colorScheme="red"
            // variant="outline"
            icon={<FiTrash2 />}
            borderRadius="full"
            disabled={isOnly}
            onClick={() => onRemove(index)}
          />
        </Tooltip>
      </Box>

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
            <Input placeholder="მაგ. Mar 19, 2022" {...dateInputFormProps} />
          </PopoverTrigger>
          <PopoverContent boxShadow="lg">
            <FocusLock returnFocus persistentFocus={false}>
              <PopoverArrow />

              <DayPicker
                mode="single"
                // {...dateInputFormProps}
                selected={selected}
              />
            </FocusLock>
          </PopoverContent>
        </Popover>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor={`transactions.${index}.amount`}>დივიდენდის რაოდენობა</FormLabel>
        <Input
          placeholder="მაგ. 10000"
          {...register(`transactions.${index}.amount`, { required: true })}
        />
      </FormControl>
    </Box>
  )
}

export default TaxForm