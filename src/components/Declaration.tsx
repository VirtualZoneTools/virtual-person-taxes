import { FC } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
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

import validationSchema from '../utils/validationSchema'
import { FormState, INITIAL_STATE, setReusableData } from '../utils/state'
import DeclarationTransaction from './DeclarationTransaction'

interface DeclarationProps {
  data?: FormState
  onSubmit: (data: any) => void
}

const Declaration: FC<DeclarationProps> = ({ data, onSubmit }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: data || INITIAL_STATE,
    resolver: yupResolver(validationSchema),
  })
  const {
    fields: transactions,
    append,
    remove,
  } = useFieldArray({
    control,
    name: 'transactions',
  })

  const handleSubmitForm = (values: FormState) => {
    setReusableData(values)
    onSubmit(values)
  }

  const handleRemoveTransaction = (index: number) => {
    remove(index)
  }

  const handleAddTransaction = () => {
    append({ date: undefined, amount: undefined })
  }

  return (
    <Stack as="form" spacing="4" minWidth="xs" onSubmit={handleSubmit(handleSubmitForm)}>
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
        <DeclarationTransaction
          key={transaction.id}
          index={index}
          isOnly={transactions.length === 1}
          errors={errors}
          register={register}
          control={control}
          onRemove={handleRemoveTransaction}
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

export default Declaration
