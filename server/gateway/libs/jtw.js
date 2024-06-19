import jwt from 'jsonwebtoken'
import { TOKEN_KEY } from '../config.js'

export const createAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_KEY,
      {
        expiresIn: '4h'
      },
      (err, token) => {
        if (err) reject(err)
        resolve(token)
      }
    )
  })
}
