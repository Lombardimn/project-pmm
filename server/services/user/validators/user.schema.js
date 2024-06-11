import Joi from "joi"

export const userSchema = Joi.object({
  username: Joi.string().min(3).max(20).trim().required(),
  email: Joi.string().email().trim().required(),
  password: Joi.string().min(8).required({message: 'Password required'})
})