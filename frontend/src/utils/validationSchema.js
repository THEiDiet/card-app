import * as Yup from 'yup'

import { validateExpirationDate } from './validateExpirationDate'

const today = new Date()
const maxDate = new Date(2030, 0)

export const validationSchema = Yup.object().shape({
  cardNumber: Yup.string().min(16, 'Card number must be equal 16').required('Required'),
  cvv: Yup.string().min(3, 'CVV must be equal 3').required('Required'),
  amount: Yup.number().min(50).required('Required'),
  expirationDate: Yup.date()
    .transform(validateExpirationDate)
    .min(today, 'Date is too small')
    .max(maxDate, 'Date is too big')
    .required('Required'),
})
