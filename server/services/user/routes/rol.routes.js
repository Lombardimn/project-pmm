import { Router } from "express"
import { authRequired } from "../../../gateway/middlewares/validate.middleware.js"
import { validateSchema } from "../../../gateway/middlewares/schema.middleware.js"
import { rolSchema } from "../validators/rol.schema.js"
import { getRoles, getRol, createRol, updateRol } from "../controllers/rol.controllers.js"

const router = Router()

router.get('/roles', getRoles)

router.get(
  '/roles/:rol',
  authRequired,
  getRol
)

router.post(
  '/roles',
  authRequired,
  validateSchema(rolSchema),
  createRol
)

router.put(
  '/roles/:rol',
  authRequired,
  updateRol
)

export default router