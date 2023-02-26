import { Router} from 'express'
import { AuthController } from './controllers/AuthController'
import { UserController } from './controllers/UserController'

export const router = Router()

const userController = new UserController()
const authController = new AuthController()

router.post('/auth', authController.authUser)
router.post('/user', userController.createUser)
router.get('/user', userController.getAllUsers)
router.delete('/user', userController.deleteUser)