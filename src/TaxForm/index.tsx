import React from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  Tooltip,
  Stack,
  InputGroup,
  InputLeftElement,
  Icon,
} from '@chakra-ui/react'
import { FaIdCard, FaLocationArrow, FaMagic, FaPlusCircle, FaUser } from 'react-icons/fa'
import * as Yup from 'yup'
import { useFieldArray, useForm } from 'react-hook-form'
import 'react-day-picker/dist/style.css'

import { FormState } from '../App'
import { getReusableData, setReusableData } from '../saveReusableData'
import Transaction from './Transaction'

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
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<Icon as={FaUser} />} />
          <Input
            type="text"
            placeholder="მაგ. გიორგი მაისურაძე"
            {...register('fullName', { required: true, minLength: 2 })}
          />
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="address">მისამართი</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<Icon as={FaLocationArrow} />} />
          <Input
            type="text"
            placeholder="მაგ. რუსთაველის გამზ. 26"
            {...register('address', { required: true, minLength: 2 })}
          />
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="personalNumber">პირადი ნომერი</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<Icon as={FaIdCard} />} />
          <Input
            type="text"
            placeholder="მაგ. 01101899998"
            {...register('personalNumber', { required: true, minLength: 11, maxLength: 11 })}
          />
        </InputGroup>
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
            icon={<Icon as={FaPlusCircle} />}
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
          leftIcon={<Icon as={FaMagic} />}
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

export default TaxForm
