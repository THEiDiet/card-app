import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import config from 'config'
import path from 'path'
import dotenv from 'dotenv'

import { cardRouter } from './src/routes'

dotenv.config()
const __dirname = path.resolve()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const PORT = process.env.PORT || 5000

app.use('/api', cardRouter)

app.get('/', (req, res) => {
  res.send('<h1>Hallo</h1>')
})

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || config.get('mongoUri'))
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error:', e.message)
    process.exit(1)
  }
}

start()
