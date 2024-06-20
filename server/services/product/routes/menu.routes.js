import { Router } from 'express'
import { getMenus, getMenu, createMenu, updateMenu, deleteMenu } from '../controllers/menu.controllers.js'
import { validateSchema } from '../../../gateway/middlewares/schema.middleware.js'
import { authRequired } from '../../../gateway/middlewares/validate.middleware.js'
import { menuSchema } from '../validators/menu.schema.js'

const router = Router()

router.get(
  '/menus',
  authRequired,
  getMenus
)

router.get(
  '/menus/:id',
  authRequired,
  getMenu
)

router.post(
  '/menus',
  validateSchema(menuSchema),
  authRequired,
  createMenu
)

router.put(
  '/menus/:id',
  validateSchema(menuSchema),
  authRequired,
  updateMenu
)

router.delete(
  '/menus/:id',
  authRequired,
  deleteMenu
)

export default router
