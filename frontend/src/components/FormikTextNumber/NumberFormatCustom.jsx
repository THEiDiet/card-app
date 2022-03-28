import React, { forwardRef } from 'react'

import NumberFormat from 'react-number-format'

const NumberFormatCustom = forwardRef((props, ref) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <NumberFormat {...props} getInputRef={ref} thousandSeparator=" " decimalSeparator="," />
))

export default NumberFormatCustom
