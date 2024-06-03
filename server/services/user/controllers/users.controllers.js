import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcryptjs'
import { pool } from "../models/user.model.js"
import { createAccessToken } from '../../../gateway/libs/jtw.js'

export const getUsers = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT * FROM Users ORDER BY created_at ASC'
    )

    res.json(result)

  } catch (error) {
    return res.status(500)
      .json({ 
        message: error.message 
      })
  }
}

export const getUser = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT * FROM Users WHERE username = ?',
        [req.params.username]
    )

    if (result.length === 0) return res.status(404).json({
      message: 'User not found'
    })

    res.json(result[0])

  } catch (error) {
    return res.status(500)
      .json({ 
        message: error.message 
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
    return res.status(500)
      .json({ 
        message: error.message 
      })
  }
}

export const updateUser = async (req, res) => {
  const { username, email, password } = req.body

  try {
    const passwordHash = await bcrypt.hash(password, 10)

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
    return res.status(500)
      .json({ 
        message: error.message  
      })
  }
}

export const delectedUser = async (req, res) => {
  try {
    const [result] = await pool.query(
      'DELETE FROM Users WHERE username = ?',
        [req.params.username]
    )

    if (result.affectedRows === 0) return res.status(404).json({
      message: 'User not found'
    })

    return res.sendStatus(204)

  } catch (error) {
    return res.status(500)
      .json({ 
        message: error.message  
      })
  }
}