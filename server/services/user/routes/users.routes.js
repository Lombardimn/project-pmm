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
  authRequired,
  validateSchema(userSchema),
  createUser
)

router.put(
  '/users/:username',
  authRequired,
  validateSchema(userSchema),
  updateUser
)

router.delete(
  '/users/:username',
  authRequired,
  delectedUser
)

export default router
