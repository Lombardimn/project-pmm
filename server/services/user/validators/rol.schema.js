import Joi from 'joi'

export const rolSchema = Joi.object({
  rol: Joi.string().min(3).max(20).trim().required(), description: Joi.string().min(3).max(50).trim()
})