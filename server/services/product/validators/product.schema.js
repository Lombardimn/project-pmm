import { z } from 'zod'

export const productSchema = z.object({
  id: z
    .string({ required_error: 'El id es requerido', invalid_type_error: 'Debe ser una cadena de texto' }),
  name: z
    .string({ required_error: 'El nombre es requerido', invalid_type_error: 'Debe ser una cadena de texto' })
    .min(3, { message: 'Debe tener al menos 3 caracteres' })
    .max(50, { message: 'Debe tener menos de 50 caracteres' })
    .trim(),
  description: z
    .string({ required_error: 'La descripción es requerida', invalid_type_error: 'Debe ser una cadena de texto' })
    .min(3, { message: 'Debe tener al menos 3 caracteres' })
    .max(255, { message: 'Debe tener menos de 255 caracteres' })
    .trim(),
  category: z.optional(z
    .number({ required_error: 'La categoria es requerida', invalid_type_error: 'Debe ser un número' })
    .max(1, { message: 'Debe ser 0 o 1' })
  ),
  brand: z.optional(z
    .string({ required_error: 'La marca es requerida', invalid_type_error: 'Debe ser una cadena de texto' })
    .min(3, { message: 'Debe tener al menos 3 caracteres' })
    .max(50, { message: 'Debe tener menos de 50 caracteres' })
    .trim()
  ),
  image: z.optional(z
    .string({ required_error: 'La imagen es requerida', invalid_type_error: 'Debe ser una cadena de texto' })
    .max(255, { message: 'Debe tener menos de 255 caracteres' })
  ),
  unit: z
    .number({ required_error: 'La unidad es requerida', invalid_type_error: 'Debe ser un número' })
    .max(1, { message: 'Debe ser 0 o 1' }),
  price_unit: z
    .number({ required_error: 'El precio unitario es requerido', invalid_type_error: 'Debe ser un número' })
    .max(1, { message: 'Debe ser 0 o 1' }),
  min_stock: z.optional(z
    .number({ required_error: 'El stock minimo es requerido', invalid_type_error: 'Debe ser un número' })
    .max(9999999, { message: 'Debe ser menor a 9999999' })
  ),
  max_stock: z.optional(z
    .number({ required_error: 'El stock maximo es requerido', invalid_type_error: 'Debe ser un número' })
    .min(0, { message: 'Debe ser mayor a 0' })
    .max(9999999, { message: 'Debe ser menor a 9999999' })
  ),
  status: z
    .number({ required_error: 'El estado es requerido', invalid_type_error: 'Debe ser un número' })
    .max(1, { message: 'Debe ser 0 o 1' }),
  expiring: z
    .number({ required_error: 'La expiración es requerida', invalid_type_error: 'Debe ser un número' })
    .max(1, { message: 'Debe ser 0 o 1' }),
  created_at: z.optional(z.date()),
  updated_at: z.date()
})
