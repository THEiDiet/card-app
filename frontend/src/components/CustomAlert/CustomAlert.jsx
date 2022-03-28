import { useEffect, useState, memo } from 'react'

import CloseIcon from '@mui/icons-material/Close'
import { Alert, AlertTitle, Box, Button, Collapse, IconButton } from '@mui/material'

export const CustomAlert = ({ responseData, clearData }) => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState(responseData)
  const severity = typeof responseData === 'string' ? 'error' : 'success'
  useEffect(() => {
    setData(responseData)
    setOpen(true)
    const tId = setTimeout(() => {
      setOpen(false)
      setData(null)
      clearData()
    }, 2000)
    return () => clearTimeout(tId)
  }, [responseData])
  return (
    open && (
      <Box
        sx={{
          width: 'calc(100% - 20px)',
          maxWidth: 400,
          position: 'absolute',
          top: '100%',
          transform: 'translate(0, -100%)',
          left: 10,
          height: 'auto',
        }}
      >
        <Alert
          severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false)
                setData(null)
                clearData()
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {typeof data === 'string' ? (
            <>
              <AlertTitle>Some Error</AlertTitle>
              <div>{data}</div>
            </>
          ) : (
            <>
              <AlertTitle>Success</AlertTitle>
              <div>Your request Id: {data.RequestId}</div>
              <div>Your amount: {data.Amount}</div>
            </>
          )}
        </Alert>
      </Box>
    )
  )
}
