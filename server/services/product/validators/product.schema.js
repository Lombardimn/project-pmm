import joi from 'joi'
import { z } from 'zod'

export const productSchema = joi.object({
  id: joi.string().required(),
  name: joi.string().min(3).max(50).trim().required(),
  description: joi.string().min(3).max(255).trim().required(),
  category: joi.number().required(),
  brand: joi.string().min(3).max(50).trim().required(),
  image: joi.string().required(),
  unit: joi.number().required(),
  price_unit: joi.number().min(0).required(),
  min_stock: joi.number().min(0).required(),
  max_stock: joi.number().min(0).required(),
  status: joi.number().required(),
  expiring: joi.boolean().required(),
  created_at: joi.date(),
  updated_at: joi.date()
})

// export const productSchemaZod = z.object({
//   id: z.string().required(),
//   name: z.string().min(3).max(50).trim().required(),
//   description: z.string().min(3).max(255).trim().required(),
//   category: z.number().required(),
//   brand: z.string().min(3).max(50).trim().required(),
//   image: z.string().required(),
//   unit: z.number().required(),
//   price_unit: z.number().min(0).required(),
//   min_stock: z.number().min(0).required(),
//   max_stock: z.number().min(0).required(),
//   status: z.number().required(),
//   expiring: z.boolean().required(),
//   created_at: z.date(),
//   updated_at: z.date()
// })
