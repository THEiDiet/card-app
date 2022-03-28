import './App.scss'
import React, { useEffect, useState } from 'react'

import { Box, Button, CircularProgress } from '@mui/material'
import { Form, Formik } from 'formik'

import { fetchData } from './api'
import { FormikTextNumber, CustomAlert, FormFields } from './components'
import { apiConstants } from './constants'
import { validationSchema } from './utils'

export const App = () => {
  const [responseData, setResponseData] = useState(null)
  const [isFetching, setIsFetching] = useState(false)
  const initialValues = { cardNumber: '', expirationDate: '', cvv: '', amount: '' }
  const clearData = () => {
    setResponseData(null)
  }
  const onSubmitForm = async values => {
    setIsFetching(true)
    const res = await fetchData(
      `${apiConstants.baseUrl}api/addcard`,
      'POST',
      { 'Content-Type': 'application/json' },
      JSON.stringify(values),
    )
    setResponseData(res)
    setIsFetching(false)
  }
  return (
    <div className="App">
      <Box
        sx={{
          width: '80%',
          maxWidth: 400,
          height: 300,
          position: 'relative',
        }}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmitForm}
          validationSchema={validationSchema}
          validateOnBlur
        >
          {props => {
            const { handleSubmit, touched, errors, handleChange, values, dirty } = props
            const [active, setActive] = useState(false)
            useEffect(() => {
              if (Object.keys(touched).length === 4 && Object.keys(errors).length === 0) {
                setActive(true)
              } else setActive(false)
            }, [errors, touched])
            const handleKeyPress = e => {
              if (
                +e.target.value >= 50 &&
                Object.keys(touched).length === 3 &&
                Object.keys(errors).length === 0
              ) {
                setActive(true)
              }
              if (Object.keys(touched).length === 4 && Object.keys(errors).length === 0) {
                setActive(true)
              }
            }
            return (
              <Form className="form">
                <FormFields handleKeyPress={handleKeyPress} />
                <Button variant="contained" type="submit" disabled={!active}>
                  Submit
                </Button>
              </Form>
            )
          }}
        </Formik>
        {isFetching && (
          <CircularProgress
            sx={{
              position: 'absolute',
              bottom: '-50px',
              left: 'calc(50% - 20px)',
            }}
          />
        )}
      </Box>
      {responseData && <CustomAlert responseData={responseData} clearData={clearData} />}
    </div>
  )
}
