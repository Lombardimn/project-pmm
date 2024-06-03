import { Router } from "express"
import { authRequired } from "../../../gateway/middlewares/validate.middleware.js"
import { getRoles, getRol, createRol, updateRol, toggleRolStatus } from "../controllers/rol.controllers.js"

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
  createRol
)

router.put(
  '/roles/:rol',
  authRequired,
  updateRol
)

router.put(
  '/roles/:rol',
  authRequired,
  toggleRolStatus
)


export default router