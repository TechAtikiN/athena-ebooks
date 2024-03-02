import { Router } from 'express'
import { signInUser } from '../controllers/auth.js'

const authRouter = Router()

authRouter.post('/signin', signInUser)

export { authRouter }