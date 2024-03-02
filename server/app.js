import express from 'express'

// express app
const app = express()

// middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world')
})

export { app }