import React from 'react'
import { TextInputField } from 'evergreen-ui'
// import get from 'lodash.get'

const TaxFormInput = React.forwardRef((props, ref) => {
  return (
    <div className="Input-wrapper">
      <TextInputField
        ref={ref}
        marginBottom="15px"
        type="text"
        {...props}
        // validationMessage={get(touched, field.name) && get(errors, field.name)}
      />
    </div>
  )
})

export default TaxFormInput
