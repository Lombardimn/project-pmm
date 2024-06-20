import { z } from 'zod'

export const clientSchema = z.object({
  name: z
    .string({ required_error: 'El nombre es requerido', invalid_type_error: 'Debe ser una cadena de texto' })
    .min(3, { message: 'Debe tener al menos 3 caracteres' })
    .max(50, { message: 'Debe tener menos de 50 caracteres' })
    .trim(),
  lastname: z
    .string({ required_error: 'El apellido es requerido', invalid_type_error: 'Debe ser una cadena de texto' })
    .min(3, { message: 'Debe tener al menos 3 caracteres' })
    .max(50, { message: 'Debe tener menos de 50 caracteres' })
    .trim(),
  areaPhone: z
    .number({ required_error: 'El area es requerido', invalid_type_error: 'Debe ser un número' })
    .min(4, { message: 'Debe tener al menos 4 digitos' })
    .max(5, { message: 'Debe tener menos de 5 digitos' }),
  numberPhone: z
    .number({ required_error: 'El numero es requerido', invalid_type_error: 'Debe ser un número' })
    .min(8, { message: 'Debe tener al menos 8 digitos' })
    .max(8, { message: 'Debe tener menos de 8 digitos' }),
  status: z.optional(z
    .number({ required_error: 'El estado es requerido', invalid_type_error: 'Debe ser un número' })
    .max(1, { message: 'Debe ser 0 o 1' })
  ),
  user_id: z
    .string({ required_error: 'El usuario es requerido', invalid_type_error: 'Debe ser una cadena de texto' }),
  created_at: z.optional(z.date()),
  updated_at: z.date()
})
