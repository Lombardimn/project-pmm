import { z } from 'zod'

export const menuSchema = z.object({
  name: z
    .string({ required_error: 'El nombre es requerido', invalid_type_error: 'Debe ser una cadena de texto' })
    .min(6, { message: 'Debe tener al menos 6 caracteres' })
    .max(20, { message: 'Debe tener menos de 20 caracteres' })
    .trim(),
  description: z
    .string({ required_error: 'La descripción es requerida', invalid_type_error: 'Debe ser una cadena de texto' })
    .min(3, { message: 'Debe tener al menos 3 caracteres' })
    .max(255, { message: 'Debe tener menos de 255 caracteres' })
    .trim(),
  status: z.optional(z
    .number({ required_error: 'El estado es requerido', invalid_type_error: 'Debe ser un número' })
    .max(1, { message: 'Debe ser 0 o 1' })
  ),
  image: z.optional(z
    .string({ required_error: 'La imagen es requerida', invalid_type_error: 'Debe ser una cadena de texto' })
    .max(255, { message: 'Debe tener menos de 255 caracteres' })
  ),
  category_id: z
    .number({ required_error: 'La categoria es requerida', invalid_type_error: 'Debe ser un número' })
    .max(1, { message: 'Debe ser 0 o 1' }),
  type_id: z
    .number({ required_error: 'El tipo es requerido', invalid_type_error: 'Debe ser un número' })
    .max(1, { message: 'Debe ser 0 o 1' }),
  price: z
    .number({ required_error: 'El precio es requerido', invalid_type_error: 'Debe ser un número' })
    .max(9999999, { message: 'Debe ser menor a 9999999' }),
  user_id_created: z
    .string({ required_error: 'El usuario es requerido', invalid_type_error: 'Debe ser una cadena de texto' }),
  created_at: z.optional(z.date()),
  user_id_updated: z.optional(z
    .string({ required_error: 'El usuario es requerido', invalid_type_error: 'Debe ser una cadena de texto' })
  ),
  updated_at: z.date()
})
