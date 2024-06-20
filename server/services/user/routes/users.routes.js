import { Router } from 'express'
import { userSchema } from '../validators/user.schema.js'
import { validateSchema } from '../../../gateway/middlewares/schema.middleware.js'
import { getUsers, getUser, createUser, updateUser, delectedUser } from '../controllers/users.controllers.js'
import { authRequired } from '../../../gateway/middlewares/validate.middleware.js'

const router = Router()

router.get(
  '/users',
  authRequired,
  getUsers
)

router.get(
  '/users/:username',
  authRequired,
  getUser
)

router.post(
  '/users',
  validateSchema(userSchema),
  authRequired,
  createUser
)

router.put(
  '/users/:username',
  validateSchema(userSchema),
  authRequired,
  updateUser
)

router.delete(
  '/users/:username',
  authRequired,
  delectedUser
)

export default router
