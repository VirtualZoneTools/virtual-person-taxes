import React from 'react'
import { TextInputField } from 'evergreen-ui'
import get from 'lodash.get'

const TaxFormInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div className="Input-wrapper">
    <TextInputField
      marginBottom="15px"
      type="text"
      {...field}
      {...props}
      validationMessage={get(touched, field.name) && get(errors, field.name)}
    />
  </div>
)

export default TaxFormInput
