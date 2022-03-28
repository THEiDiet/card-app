import React from 'react'

import { Box } from '@mui/material'

import { FormikTextNumber } from '../FormikTextNumber/FormikTextNumber'

export const FormFields = ({ handleKeyPress }) => (
  <>
    <FormikTextNumber
      name="cardNumber"
      label="Card number"
      format="#### #### #### ####"
      valueName="value"
      autoFocus
      fullWidth
    />
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <FormikTextNumber
        name="expirationDate"
        label="Expiration date"
        format="##/####"
        valueName="formattedValue"
        sx={{ flex: '0 0 40%' }}
      />
      <FormikTextNumber
        name="cvv"
        label="Cvv"
        format="###"
        valueName="value"
        sx={{ flex: '0 0 40%' }}
      />
    </Box>
    <FormikTextNumber
      onKeyUp={handleKeyPress}
      name="amount"
      label="Amount"
      valueName="floatValue"
      fullWidth
    />
  </>
)
