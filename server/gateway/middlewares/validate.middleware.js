import jwt from 'jsonwebtoken'
import { TOKEN_KEY } from '../config.js'

export const authRequired = (req, res, next) => {
  const token = req.cookies.token
  console.log(token)
  if (!token) return res.status(401).json({ message: 'Autorización denegada.' })

  jwt.verify(token, TOKEN_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Token inválido.' })
    req.decoded = decoded

    next()
  })
}
