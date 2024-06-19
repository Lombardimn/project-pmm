export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body)
    next()
  } catch (error) {
    if (error.errors && Array.isArray(error.errors)) {
      return res.status(400).json({ error: error.errors.map((err) => err.message) })
    } else {
      return res.status(400).json({ error: 'Validation error' })
    }
  }
}
