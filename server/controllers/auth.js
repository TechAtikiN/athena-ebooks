import { User } from '../models/user.js'

const signInUser = async (req, res) => {
  const { email, name, image } = await req.body

  if (!email || !name) {
    return res.status(400).json({ error: 'Email and name are required' })
  }

  // check if user exists in the database
  const user = await User.findOne({ email })
  if (user) {
    return res.status(200).json(user)
  }

  // if user does not exist, creating a new user
  try {
    const newUser = await User.create({ email, name, image })
    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export { signInUser }