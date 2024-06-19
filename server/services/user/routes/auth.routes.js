import { Router } from 'express'
import { validateSchema } from '../../../gateway/middlewares/schema.middleware.js'
import { authRequired } from '../../../gateway/middlewares/validate.middleware.js'
import { loginSchema } from '../validators/auth.schema.js'
import { loginUser, logoutUser, profileUser } from '../controllers/auth.controllers.js'

const router = Router()

router.get(
  '/profile',
  authRequired,
  profileUser
)

router.post(
  '/login',
  validateSchema(loginSchema),
  loginUser
)

router.post(
  '/logout',
  logoutUser
)

export default router
