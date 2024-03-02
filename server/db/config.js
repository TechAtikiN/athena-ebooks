import { DB_NAME } from '../constants.js'
import mongoose from 'mongoose'

async function connectDB() {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB