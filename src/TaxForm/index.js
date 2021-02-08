import React from 'react'
import { Formik, Field, FieldArray, Form } from 'formik'
import * as Yup from 'yup'
import { Button, Pane, Card, Heading, Paragraph, CrownIcon } from 'evergreen-ui'

import TaxFormInput from './Input'
import { getReusableData, setReusableData } from '../saveReusableData'

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
        .min(1, 'თარიღი უნდა იყოს DD/MM/YYYY ფორმატში')
        .required(messages.required()),
      amount: Yup.number().required(messages.required()),
    }),
  ),
})

const TaxForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialState}
      onSubmit={(values, actions) => {
        setReusableData(values)
        onSubmit(values)
        actions.setSubmitting(false)
      }}
      validationSchema={Schema}
      render={({ status, isSubmitting, isValid, values }) => (
        <Form>
          <Field
            type="text"
            name="fullName"
            label="სრული სახელი"
            component={TaxFormInput}
            placeholder="მაგ. გიორგი მაისურაძე"
            required
          />

          <Field
            type="text"
            name="address"
            label="მისამართი"
            component={TaxFormInput}
            placeholder="მაგ. რუსთაველის გამზ. 26"
            required
          />

          <Field
            type="text"
            name="personalNumber"
            label="პირადი ნომერი"
            component={TaxFormInput}
            placeholder="მაგ. 01101899998"
            required
          />

          <FieldArray
            name="transactions"
            render={arrayHelpers => (
              <Pane>
                <Heading size={400} marginBottom="15px">
                  ტრანზაქციები
                </Heading>

                {values.transactions &&
                  values.transactions.length > 0 &&
                  values.transactions.map((transaction, index) => (
                    <Card
                      key={index}
                      elevation={0}
                      backgroundColor="white"
                      padding="15px"
                      marginBottom="15px"
                    >
                      <Heading size={300} marginBottom="15px">
                        ტრანზაქცია #{index + 1}
                      </Heading>

                      <Field
                        type="string"
                        name={`transactions.${index}.date`}
                        label="თარიღი"
                        component={TaxFormInput}
                        placeholder="მაგ. 02/03/2019"
                        required
                      />

                      <Field
                        type="number"
                        name={`transactions.${index}.amount`}
                        label="დივიდენდის რაოდენობა"
                        component={TaxFormInput}
                        placeholder="მაგ. 10000"
                        required
                      />

                      <Pane display="flex" justifyContent="flex-end">
                        <Button
                          type="button"
                          appearance="minimal"
                          intent="danger"
                          iconBefore="remove"
                          disabled={values.transactions.length === 1}
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          ტრანზაქციის წაშლა
                        </Button>
                      </Pane>
                    </Card>
                  ))}

                {status && status.msg && <Paragraph>{status.msg}</Paragraph>}

                <Pane
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Button
                    type="button"
                    appearance="minimal"
                    intent="success"
                    iconBefore="add"
                    onClick={() => arrayHelpers.push('')}
                  >
                    ტრანზაქციის დამატება
                  </Button>

                  <Button
                    iconBefore={CrownIcon}
                    appearance="primary"
                    height={40}
                    marginTop="15px"
                    type="submit"
                    disabled={isSubmitting || !isValid}
                  >
                    ინსტრუქციების დაგენერირება
                  </Button>
                </Pane>
              </Pane>
            )}
          />
        </Form>
      )}
    />
  )
}

export default TaxForm
