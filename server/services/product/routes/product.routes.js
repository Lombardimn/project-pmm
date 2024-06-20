import { Router } from 'express'
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/product.controllers.js'
import { authRequired } from '../../../gateway/middlewares/validate.middleware.js'
import { validateSchema } from '../../../gateway/middlewares/schema.middleware.js'
import { productSchema } from '../validators/product.schema.js'

const router = Router()

router.get(
  '/products',
  authRequired,
  getProducts
)

router.get(
  '/products/:id',
  authRequired,
  getProduct
)

router.post(
  '/products',
  validateSchema(productSchema),
  authRequired,
  createProduct
)

router.put(
  '/products/:id',
  validateSchema(productSchema),
  authRequired,
  updateProduct
)

router.delete(
  '/products/:id',
  authRequired,
  deleteProduct
)

export default router
