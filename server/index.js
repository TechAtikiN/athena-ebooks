import { app } from './app.js'
import dotenv from 'dotenv'
import connectDB from './db/config.js'

// env variables
dotenv.config()

// PORT
export const PORT = process.env.PORT || 8000

// connect to db
connectDB()
  .then(() => {
    // start listening for requests
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`)
  })

