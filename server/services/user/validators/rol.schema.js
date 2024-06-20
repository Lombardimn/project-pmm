import { z } from 'zod'

export const rolSchema = z.object({
  rol: z
    .string({ required_error: 'El rol es requerido', invalid_type_error: 'Debe ser una cadena de texto' })
    .min(3, { message: 'Debe tener al menos 3 caracteres' })
    .max(20, { message: 'Debe tener menos de 20 caracteres' })
    .trim(),
  description: z
    .string({ required_error: 'La descripción es requerida', invalid_type_error: 'Debe ser una cadena de texto' })
    .min(3, { message: 'Debe tener al menos 3 caracteres' })
    .max(50, { message: 'Debe tener menos de 50 caracteres' })
    .trim(),
  active: z.optional(z
    .number({ required_error: 'El estado es requerido', invalid_type_error: 'Debe ser un número' })
    .max(1, { message: 'Debe ser 0 o 1' })
  ),
  user_id_create: z.optional(z
    .string({ required_error: 'El usuario es requerido', invalid_type_error: 'Debe ser una cadena de texto' })
    .max(36, { message: 'Debe tener menos de 36 caracteres' })
  ),
  created_at: z.optional(z.date()),
  user_id_update: z.optional(z
    .string({ required_error: 'El usuario es requerido', invalid_type_error: 'Debe ser una cadena de texto' })
    .max(36, { message: 'Debe tener menos de 36 caracteres' })
  ),
  updated_at: z.optional(z.date())
})
