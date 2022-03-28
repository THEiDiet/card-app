import React, { createRef } from 'react'

import { TextField } from '@mui/material'
import { Field, useField } from 'formik'

import NumberFormatCustom from './NumberFormatCustom'

export const FormikTextNumber = props => {
  const { name, format, mask, valueName, autoFocus, fullWidth, label, ...rest } = props

  const [, { touched, value, error }, { setValue }] = useField(name)
  const isError = Boolean(error) && touched

  const handleChange = values => {
    setValue((values && values[valueName]) || '')
  }
  const ref = createRef()

  return (
    <Field
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      name={name}
      label={label}
      value={value}
      as={TextField}
      variant="outlined"
      inputRef={ref}
      onChange={null}
      error={isError}
      fullWidth={Boolean(fullWidth)}
      helperText={isError ? error : undefined}
      InputProps={{
        inputComponent: NumberFormatCustom,
        inputProps: {
          onValueChange: handleChange,
          format,
          mask,
          autoFocus,
        },
      }}
    />
  )
}
