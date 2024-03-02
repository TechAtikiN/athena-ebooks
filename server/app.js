import { authRouter } from './routes/auth.js'
import express from 'express'
import cors from 'cors'

// express app
const app = express()

// middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
)
app.use(express.json())

app.use('/api/auth', authRouter)

export { app }