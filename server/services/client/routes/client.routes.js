import { Router } from "express"
import { authRequired } from "../../../gateway/middlewares/validate.middleware.js"
import { validateSchema } from "../../../gateway/middlewares/schema.middleware.js"
import { clientSchema } from "../validators/client.schema.js"
import { getClients, getClient, createClient, updateClient, deleteClient } from "../controllers/client.controllers.js"

const router = Router()

router.get(
  '/clients',
  authRequired,
  getClients
)

router.get(
  '/client',
  authRequired,
  getClient
)

router.post(
  '/clients',
  validateSchema(clientSchema),
  authRequired,
  createClient
)

router.put(
  '/clients/:id',
  authRequired,
  updateClient
)

router.delete(
  '/clients/:id',
  authRequired,
  deleteClient
)

export default router