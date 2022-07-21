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
  VStack,
} from '@chakra-ui/react'
import {
  BiUserVoice,
  BiMap,
  BiCreditCardFront,
  BiRightArrowCircle,
  BiPlusCircle,
} from 'react-icons/bi'

import validationSchema from '../utils/validationSchema'
import DeclarationTransaction from './DeclarationTransaction'
import Navigation from './Navigation'
import { IDeclaration, useDeclaration } from '../contexts/DeclarationContext'

interface DeclarationProps {
  onSubmit: () => void
}

const Declaration: FC<DeclarationProps> = ({ onSubmit }) => {
  const [declarationData, updateDeclarationData] = useDeclaration()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: declarationData,
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

  const handleSubmitForm = (data: IDeclaration) => {
    updateDeclarationData?.(data)
    onSubmit()
  }

  const handleRemoveTransaction = (index: number) => {
    remove(index)
  }

  const handleAddTransaction = () => {
    append({ date: undefined, amount: undefined })
  }

  return (
    <VStack spacing="4" padding={4}>
      <Navigation />

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
    </VStack>
  )
}

export default Declaration
