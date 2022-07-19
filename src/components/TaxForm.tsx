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
  transactions: [{ date: '', amount: undefined }],
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
    append({ date: '', amount: undefined })
  }

  // TODO: implement this.
  // status, isSubmitting, isValid, values

  return (
    <Stack as="form" spacing="4" onSubmit={handleSubmit(handleSubmitForm)}>
      <FormControl isInvalid={!!errors.fullName} isRequired>
        <FormLabel>სახელი და გვარი</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<Icon as={BiUserVoice} />} />
          <Input type="text" placeholder="მაგ. გიორგი მაისურაძე" {...register('fullName')} />
        </InputGroup>
        <FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.address} isRequired>
        <FormLabel>მისამართი</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<Icon as={BiMap} />} />
          <Input type="text" placeholder="მაგ. რუსთაველის გამზ. 26" {...register('address')} />
        </InputGroup>
        <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.personalNumber} isRequired>
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
          isOnly={transactions.length === 1}
          isLast={index === transactions.length - 1}
          onRemove={handleRemoveTransaction}
          onAppend={handleAddTransaction}
          errors={errors}
          register={register}
          setValue={setValue}
        />
      ))}

      {/* TODO: wsup */}
      {/* {status && status.msg && <Paragraph>{status.msg}</Paragraph>} */}

      <Stack>
        <Button
          size="sm"
          borderRadius="sm"
          colorScheme="green"
          leftIcon={<Icon as={BiPlusCircle} />}
          variant="outline"
          onClick={handleAddTransaction}
        >
          ტრანზაქციის დამატება
        </Button>

        <Button
          size="sm"
          borderRadius="sm"
          colorScheme="blue"
          leftIcon={<Icon as={BiRightArrowCircle} />}
          type="submit"
          // TODO: validation
          // disabled={isSubmitting || !isValid}
        >
          ინსტრუქციების ჩვენება
        </Button>
      </Stack>
    </Stack>
  )
}

export default TaxForm
