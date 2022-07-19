import { FC } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Icon,
  FormErrorMessage,
} from '@chakra-ui/react'
import {
  BiUserVoice,
  BiMap,
  BiCreditCardFront,
  BiRightArrowCircle,
  BiPlusCircle,
} from 'react-icons/bi'

import { getReusableData, setReusableData } from './../utils/saveReusableData'
import { FormState } from './App'
import Transaction from './Transaction'

const initialState: FormState = {
  ...getReusableData(),
  transactions: [{ date: undefined, amount: undefined }],
}

const messages = {
  required: (field: string) => `${field}ს ველი სავალდებულოა`,
  short: (field: string) => `${field} ძალიან მოკლეა`,
  small: (field: string) => `${field} ძალიან ცოტაა`,
  format: (field: string, format: string) => `${field} უნდა იყოს "${format}"-ის`,
  length: (field: string, length: number) => `${field} უნდა იყოს ${length} სიმბოლო`,
  typeError: (field: string, type: string) => `${field} უნდა იყოს ${type}`,
}

const schema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, messages.short('სახელი'))
    .required(messages.required('სახელი'))
    .matches(/^\w+( \w+)+$/u, messages.format('სახელი და გვარი', 'ერთად')),
  address: Yup.string()
    .min(2, messages.short('მისამართი'))
    .required(messages.required('მისამართი')),
  personalNumber: Yup.string()
    .length(11, messages.length('პირადი ნომერი', 11))
    .required(messages.required('პირადი ნომერი')),
  transactions: Yup.array().of(
    Yup.object().shape({
      date: Yup.string()
        .required(messages.required('თარიღი'))
        .matches(/^\w{3} \d{2}, \d{4}$/, messages.format('თარიღი', 'Mar 19, 2022')),
      amount: Yup.number()
        .typeError(messages.typeError('დივიდენდი', 'რიცხვი'))
        .required(messages.required('დივიდენდი'))
        .min(10, messages.small('დივიდენდი')),
    }),
  ),
})

interface TaxFormProps {
  data?: FormState
  onSubmit: (data: any) => void
}

const TaxForm: FC<TaxFormProps> = ({ data, onSubmit }) => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
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
    append({ date: undefined, amount: undefined })
  }

  return (
    <Stack as="form" spacing="4" onSubmit={handleSubmit(handleSubmitForm)}>
      <FormControl isInvalid={!!errors.fullName}>
        <FormLabel>სახელი და გვარი</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<Icon as={BiUserVoice} />} />
          <Input type="text" placeholder="მაგ. გიორგი მაისურაძე" {...register('fullName')} />
        </InputGroup>
        <FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.address}>
        <FormLabel>მისამართი</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<Icon as={BiMap} />} />
          <Input type="text" placeholder="მაგ. რუსთაველის გამზ. 26" {...register('address')} />
        </InputGroup>
        <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.personalNumber}>
        <FormLabel>პირადი ნომერი</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<Icon as={BiCreditCardFront} />} />
          <Input type="number" placeholder="მაგ. 01101899998" {...register('personalNumber')} />
        </InputGroup>
        <FormErrorMessage>{errors.personalNumber?.message}</FormErrorMessage>
      </FormControl>

      {transactions.map((transaction, index) => (
        <Transaction
          key={transaction.id}
          index={index}
          errors={errors}
          isOnly={transactions.length === 1}
          onRemove={handleRemoveTransaction}
          register={register}
          setValue={setValue}
          transaction={transaction}
        />
      ))}

      <Stack>
        <Button
          size="sm"
          borderRadius="sm"
          colorScheme="green"
          leftIcon={<Icon as={BiPlusCircle} />}
          variant="outline"
          onClick={handleAddTransaction}
          disabled={isSubmitting}
        >
          ტრანზაქციის დამატება
        </Button>

        <Button
          size="sm"
          borderRadius="sm"
          colorScheme="blue"
          leftIcon={<Icon as={BiRightArrowCircle} />}
          type="submit"
          disabled={isSubmitting}
        >
          ინსტრუქციების ჩვენება
        </Button>
      </Stack>
    </Stack>
  )
}

export default TaxForm
