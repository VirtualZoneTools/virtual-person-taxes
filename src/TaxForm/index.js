import React, { useRef, useState } from 'react'
import {
  Button,
  Pane,
  Card,
  Heading,
  Paragraph,
  CrownIcon,
  DeleteIcon,
  AddIcon,
  TrashIcon,
} from 'evergreen-ui'
import * as Yup from 'yup'
import { format, isValid, parse, sub } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import { usePopper } from 'react-popper'
import FocusTrap from 'focus-trap-react'

import 'react-day-picker/dist/style.css'

import TaxFormInput from './Input'
import { getReusableData, setReusableData } from '../saveReusableData'
import { useFieldArray, useForm } from 'react-hook-form'

const initialState = {
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
  short: field => `${field} ძალიან მოკლეა`,
  invalid: field => `არასწორი ${field}`,
}

const Schema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, messages.short('სახელი'))
    .required(messages.required()),
  address: Yup.string()
    .min(2, messages.short('მისამართი'))
    .required(messages.required()),
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

const TaxForm = ({ onSubmit }) => {
  const { control, register, handleSubmit } = useForm({
    defaultValues: initialState,
  })
  const { fields: transactions, append, remove } = useFieldArray({
    control,
    name: 'transactions',
  })

  const [selected, setSelected] = useState()
  const [inputValue, setInputValue] = useState()
  const [isPopperOpen, setIsPopperOpen] = useState(false)

  const popperRef = useRef()
  const inputRef = useRef()
  const [popperElement, setPopperElement] = useState()

  const popper = usePopper(popperRef.current, popperElement, {
    placement: 'bottom-start',
  })

  const handleSubmitForm = values => {
    console.log(values)
    // TODO: stuff...
    // setReusableData(values)
    // onSubmit(values)
  }

  const handleButtonClick = () => {
    setIsPopperOpen(true)
  }

  const handleClosePopper = () => {
    setIsPopperOpen(false)
  }

  const handleInputChange = e => {
    const { value } = e.currentTarget
    setInputValue(value)

    const date = parse(value, 'y-MM-dd', new Date())
    if (isValid(date)) {
      setSelected(date)
    } else {
      setSelected(undefined)
    }
  }

  const handleDaySelect = date => {
    setSelected(date)
    if (date) {
      setInputValue(format(date, 'y-MM-dd'))
      handleClosePopper()
    } else {
      setInputValue('')
    }
  }

  // TODO: implement this.
  // <Formik
  //   validationSchema={Schema}
  //   render={({ status, isSubmitting, isValid, values }) => (
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <TaxFormInput
        type="text"
        label="სრული სახელი"
        placeholder="მაგ. გიორგი მაისურაძე"
        {...register('fullName', { required: true, minLength: 2 })}
      />
      <TaxFormInput
        type="text"
        label="მისამართი"
        placeholder="მაგ. რუსთაველის გამზ. 26"
        {...register('address', { required: true, minLength: 2 })}
      />
      <TaxFormInput
        type="text"
        label="პირადი ნომერი"
        placeholder="მაგ. 01101899998"
        {...register('personalNumber', { required: true, minLength: 11, maxLength: 11 })}
      />

      <Pane>
        <Heading size={400} marginBottom="15px">
          ტრანზაქციები
        </Heading>

        {transactions.map((transaction, index) => (
          <Card
            key={transaction.id}
            elevation={0}
            backgroundColor="white"
            padding="15px"
            marginBottom="15px"
            position="relative"
          >
            <Pane
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginBottom="12px"
            >
              <Heading size={400} fontWeight="bold">
                ტრანზაქცია #{index + 1}
              </Heading>

              <Button
                type="button"
                size="small"
                intent="danger"
                iconBefore={TrashIcon}
                disabled={transactions.length === 1}
                onClick={() => remove(index)}
              >
                წაშლა
              </Button>
            </Pane>

            <TaxFormInput
              type="string"
              label="თარიღი"
              placeholder="მაგ. 02/03/2019"
              {...register(`transactions.${index}.date`, { required: true })}
            />

            {isPopperOpen && (
              <FocusTrap
                active
                focusTrapOptions={{
                  initialFocus: false,
                  allowOutsideClick: true,
                  clickOutsideDeactivates: true,
                  onDeactivate: handleClosePopper,
                }}
              >
                <div
                  tabIndex={-1}
                  style={popper.styles.popper}
                  className="dialog-sheet"
                  {...popper.attributes.popper}
                  ref={setPopperElement}
                  role="dialog"
                >
                  <DayPicker
                    initialFocus={isPopperOpen}
                    mode="single"
                    defaultMonth={selected}
                    selected={selected}
                    onSelect={handleDaySelect}
                  />
                </div>
              </FocusTrap>
            )}

            <TaxFormInput
              type="number"
              label="დივიდენდის რაოდენობა"
              placeholder="მაგ. 10000"
              {...register(`transactions.${index}.amount`, { required: true })}
            />

            {index === transactions.length - 1 && (
              <Pane
                display="flex"
                justifyContent="center"
                position="absolute"
                left="50%"
                transform="translateX(-50%)"
              >
                <Button
                  type="button"
                  intent="success"
                  appearance="primary"
                  iconBefore={AddIcon}
                  onClick={() => append({ date: '', amount: '' })}
                >
                  ტრანზაქციის დამატება
                </Button>
              </Pane>
            )}
          </Card>
        ))}

        {/* TODO: wsup */}
        {/* {status && status.msg && <Paragraph>{status.msg}</Paragraph>} */}
      </Pane>

      <Pane display="flex" justifyContent="center">
        <Button
          iconBefore={CrownIcon}
          appearance="primary"
          height={40}
          marginTop="15px"
          type="submit"
          // TODO: validation
          // disabled={isSubmitting || !isValid}
        >
          ინსტრუქციების დაგენერირება
        </Button>
      </Pane>
    </form>
  )
}

export default TaxForm
