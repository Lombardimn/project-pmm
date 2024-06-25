import bcrypt from 'bcryptjs'
import { pool } from '../models/user.model.js'
import { createAccessToken } from '../../../gateway/libs/jtw.js'

export const loginUser = async (req, res) => {
  const { username, password } = req.body

  try {
    const [result] = await pool.query(
      'SELECT id, username, password, img_url, rol_id FROM Users WHERE username = ?',
      [username]
    )

    // VALIDATE USER

    if (result.length === 0) return res.status(401).json({ message: 'Credenciales inválidas' })

    const validPassword = await bcrypt.compare(password, result[0].password)

    if (!validPassword) return res.status(401).json({ message: 'Credenciales inválidas' })

    // CREATE TOKEN
    const token = await createAccessToken({
      id: result[0].id,
      username,
      rol_id: result[0].rol_id
    })

    res.cookie('token', token)
    res.json({
      id: result[0].id,
      username: result[0].username,
      img_url: result[0].img_url,
      rol_id: result[0].rol_id,
      message: 'Sesión iniciada correctamente'
    })
  } catch (error) {
    console.error('Error en loginUser:', error)
    return res.status(500)
      .json({
        message: 'Error al iniciar sesión'
      })
  }
}

export const logoutUser = async (req, res) => {
  try {
    res.cookie('token', '', {
      expires: new Date(0)
    })

    return res.sendStatus(200)
  } catch (error) {
    console.error('Error en logoutUser:', error)
    return res.status(500)
      .json({
        message: 'Error al cerrar sesión'
      })
  }
}

export const profileUser = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT * FROM Users WHERE id = ?',
      [req.decoded.id]
    )

    if (result.length === 0) return res.status(404).json({ message: 'Usuario no encontrado' })

    res.json({
      username: result[0].username,
      email: result[0].email,
      active: result[0].active,
      imgUrl: result[0].img_url,
      createAt: result[0].created_at,
      updatedAt: result[0].updated_at
    })
  } catch (error) {
    console.error('Error en profileUser:', error)
    return res.status(500)
      .json({
        message: 'Error al consultar el perfil de usuario'
      })
  }
}
