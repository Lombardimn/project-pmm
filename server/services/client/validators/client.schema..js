import Joi from 'joi'

export const clientSchema = Joi.object({
  id: Joi.string().min(3).trim().required(),
  name: Joi.string().min(3).max(50).trim().required(),
  lastname: Joi.string().min(3).max(50).trim().required(),
  area_phone: Joi.number().min(4).max(5).trim().required(),
  number_phone: Joi.number().min(8).max(8).trim().required(),
  relation_id: Joi.number(),
  status: Joi.boolean().required(),
  user_id: Joi.string().min(3).max(50).trim().required(),
  created_at: Joi.date(),
  updated_at: Joi.date()
})