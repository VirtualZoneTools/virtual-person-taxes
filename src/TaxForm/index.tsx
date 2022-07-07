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
  FormErrorMessage,
} from '@chakra-ui/react'
import { FaIdCard, FaLocationArrow, FaMagic, FaPlusCircle, FaUser } from 'react-icons/fa'
import { useFieldArray, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
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
  required: (field: string) => `${field}ს ველი სავალდებულოა`,
  short: (field: string) => `${field} ძალიან მოკლეა`,
  format: (field: string, format: string) => `${field} უნდა იყოს "${format}"-ის`,
  length: (field: string, length: number) => `${field} უნდა იყოს ${length} სიმბოლო`,
}

const schema = Yup.object().shape({
  fullName: Yup.string().min(2, messages.short('სახელი')).required(messages.required('სახელი')),
  address: Yup.string()
    .min(2, messages.short('მისამართი'))
    .required(messages.required('მისამართი')),
  personalNumber: Yup.string()
    .length(11, messages.length('პირადი ნომერი', 11))
    .required(messages.required('პირადი ნომერი')),
  transactions: Yup.array().of(
    Yup.object().shape({
      date: Yup.string()
        .min(10, messages.format('თარიღი', 'DD/MM/YYYY'))
        .required(messages.required('თარიღი')),
      amount: Yup.number().required(messages.required('თარიღი')),
    }),
  ),
})

interface TaxFormProps {
  data?: FormState
  onSubmit: (data: any) => void
}

const TaxForm: React.FC<TaxFormProps> = ({ data, onSubmit }) => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: data || initialState,
    resolver: yupResolver(schema),
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
      <FormControl isInvalid={!!errors.fullName}>
        <FormLabel htmlFor="fullName">სახელი და გვარი</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<Icon as={FaUser} />} />
          <Input type="text" placeholder="მაგ. გიორგი მაისურაძე" {...register('fullName')} />
        </InputGroup>
        <FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.address}>
        <FormLabel htmlFor="address">მისამართი</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<Icon as={FaLocationArrow} />} />
          <Input type="text" placeholder="მაგ. რუსთაველის გამზ. 26" {...register('address')} />
        </InputGroup>
        <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.personalNumber}>
        <FormLabel htmlFor="personalNumber">პირადი ნომერი</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<Icon as={FaIdCard} />} />
          <Input type="number" placeholder="მაგ. 01101899998" {...register('personalNumber')} />
        </InputGroup>
        <FormErrorMessage>{errors.personalNumber?.message}</FormErrorMessage>
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
          setValue={setValue}
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
