import { DB_NAME } from '../constants.js'
import mongoose from 'mongoose'

async function connectDB() {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}`)
    console.log(`MongoDB connected successfully`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB