import { Router } from "express"
import { userSchema } from "../validators/user.schema.js"
import { validateSchema } from "../../../gateway/middlewares/schema.middleware.js"
import { getUsers, getUser, createUser, updateUser, delectedUser } from "../controllers/users.controllers.js"

const router = Router()

router.get(
  '/users',
  getUsers
)

router.get(
  '/users/:username',
  getUser
)

router.post(
  '/users',
  validateSchema(userSchema),
  createUser
)

router.put(
  '/users/:username',
  updateUser
)

router.delete(
  '/users/:username',
  delectedUser
)

export default router