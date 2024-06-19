import { z } from 'zod'

const regexValidator = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}/g

export const loginSchema = z.object({
  username: z
    .string({ required_error: 'El usuario es requerido', invalid_type_error: 'Debe ser una cadena de texto' })
    .min(3, { message: 'Debe tener al menos 3 caracteres' })
    .max(20, { message: 'Debe tener menos de 20 caracteres' }),
  password: z
    .string({ required_error: 'La contraseña es requerida' })
    .min(6, { message: 'Debe tener al menos 6 caracteres' })
    .regex(regexValidator, { message: 'Debe contener al menos 1 minuscula, 1 mayuscula, 1 caracter especial y 1 numero' })
})
