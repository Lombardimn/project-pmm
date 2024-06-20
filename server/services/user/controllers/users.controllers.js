import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcryptjs'
import { pool } from '../models/user.model.js'
import { createAccessToken } from '../../../gateway/libs/jtw.js'

export const getUsers = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT * FROM Users ORDER BY created_at ASC'
    )

    res.json(result)
  } catch (error) {
    console.error('Error en getUsers:', error)
    return res.status(500)
      .json({
        message: 'Error al consultar los usuarios registrados'
      })
  }
}

export const getUser = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT * FROM Users WHERE username = ?',
      [req.params.username]
    )

    if (result.length === 0) return res.status(404).json({ message: 'Usuario no encontrado' })

    res.json(result[0])
  } catch (error) {
    console.error('Error en getUser:', error)
    return res.status(500)
      .json({
        message: 'Error al consultar el usuarios registrado'
      })
  }
}

export const createUser = async (req, res) => {
  const { username, email, password } = req.body

  try {
    const passwordHash = await bcrypt.hash(password, 10)
    const id = uuidv4()

    await pool.query(
      'INSERT INTO Users (id, username, email, password) VALUES (?,?,?,?)',
      [
        id,
        username,
        email,
        passwordHash
      ]
    )

    const token = await createAccessToken({
      id
    })

    res.cookie('token', token)
    res.json({
      id,
      username
    })
  } catch (error) {
    console.error('Error en createUser:', error)
    return res.status(500)
      .json({
        message: 'Error al crear un usuario'
      })
  }
}

export const updateUser = async (req, res) => {
  const { username, email, password, newpassword } = req.body

  try {
    // VALIDACIÓN DE CREDENCIAL
    const [query] = await pool.query(
      'SELECT * FROM Users WHERE username = ?',
      [req.params.username]
    )

    const validPassword = await bcrypt.compare(password, query[0].password)

    if (!validPassword) return res.status(401).json({ message: 'Credenciales inválidas' })

    let passwordHash = query[0].password

    // VALIDACIÓN DE NUEVA CONTRASEÑA
    if (newpassword) {
      passwordHash = await bcrypt.hash(newpassword, 10)
    }

    // ACTUALIZAR USUARIO
    const [result] = await pool.query(
      'UPDATE Users SET ? WHERE username = ?',
      [
        {
          username,
          email,
          password: passwordHash,
          updated_at: new Date()
        },
        req.params.username
      ]
    )

    res.json(result)
  } catch (error) {
    console.error('Error en updateUser:', error)
    return res.status(500)
      .json({
        message: 'Error al actualizar usuario'
      })
  }
}

export const delectedUser = async (req, res) => {
  try {
    const [result] = await pool.query(
      'DELETE FROM Users WHERE username = ?',
      [req.params.username]
    )

    if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' })

    return res.sendStatus(204)
  } catch (error) {
    console.error('Error en delectedUser:', error)
    return res.status(500)
      .json({
        message: 'Error al eliminar el usuario'
      })
  }
}
