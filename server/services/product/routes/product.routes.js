import { Router } from "express"
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../controllers/product.controllers"

const router = Router()

 router.get(
  '/products',
  getProducts
)

router.get(
  '/product',
  getProduct
)

router.post(
  '/products',
  createProduct
)

router.put(
  '/products/:id',
  updateProduct
)

router.delete(
  '/products/:id',
  deleteProduct
)

export default router