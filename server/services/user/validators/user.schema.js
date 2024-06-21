import { z } from 'zod'

const regexValidator = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}/g

export const userSchema = z.object({
  username: z
    .string({ required_error: 'El usuario es requerido', invalid_type_error: 'Debe ser una cadena de texto' })
    .min(3, { message: 'Debe tener al menos 3 caracteres' })
    .max(20, { message: 'Debe tener menos de 20 caracteres' }),
  email: z
    .string({ required_error: 'El email es requerido', invalid_type_error: 'Debe ser una cadena de texto' })
    .email({ message: 'Debe ser un email valido' }),
  password: z
    .string({ required_error: 'La contraseña es requerida' })
    .min(8, { message: 'Debe tener al menos 8 caracteres' })
    .regex(regexValidator, { message: 'Debe contener al menos 1 minuscula, 1 mayuscula, 1 caracter especial y 1 numero' }),
  rol_id: z.optional(z
    .string({ required_error: 'El rol es requerido', invalid_type_error: 'Debe ser una cadena de texto' })
    .max(36, { message: 'Debe tener menos de 36 caracteres' })
  ),
  created_at: z.optional(z.date()),
  updated_at: z.optional(z.date())
})
