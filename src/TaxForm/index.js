import React from 'react'
import { Formik, Field, FieldArray, Form } from 'formik'
import * as Yup from 'yup'
import { Button, Pane, Paragraph } from 'evergreen-ui'

import TaxFormInput from './Input'

const initialState = {
  fullName: '',
  address: '',
  personalNumber: '',
  transactions: [
    {
      date: '',
      amount: 0,
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

const TaxForm = () => {
  return (
    <div>
      <Formik
        initialValues={initialState}
        onSubmit={(values, actions) => {
          console.log(values)
          actions.setSubmitting(false)
        }}
        validationSchema={Schema}
        render={({ errors, status, touched, isSubmitting, isValid, values }) => (
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
                  <Paragraph size={500} marginBottom="15px">
                    ტრანზაქციები
                  </Paragraph>

                  {values.transactions &&
                    values.transactions.length > 0 &&
                    values.transactions.map((transaction, index) => (
                      <Pane
                        key={index}
                        borderLeft
                        paddingLeft="15px"
                        paddingBottom="15px"
                        marginBottom="15px"
                      >
                        <Paragraph size={300} marginBottom="15px">
                          ტრანზაქცია #{index + 1}
                        </Paragraph>

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

                        <Button
                          type="button"
                          appearance="primary"
                          intent="danger"
                          iconBefore="remove"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          ტრანზაქციის წაშლა
                        </Button>
                      </Pane>
                    ))}
                  <Button
                    type="button"
                    appearance="primary"
                    intent="success"
                    iconBefore="add"
                    onClick={() => arrayHelpers.push('')}
                  >
                    ტრანზაქციის დამატება
                  </Button>
                </Pane>
              )}
            />

            <br />
            {status && status.msg && <div>{status.msg}</div>}
            <Button appearance="primary" type="submit" disabled={isSubmitting || !isValid}>
              ინსტრუქციების გენერაცია
            </Button>
          </Form>
        )}
      />
    </div>
  )
}

export default TaxForm
