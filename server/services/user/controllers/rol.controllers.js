import { pool } from "../models/user.model.js"

export const createRol = async (req, res) => {
  const { rol, description } = req.body
  try {
    await pool.query(
      'INSERT INTO Roles (rol, description) VALUES (?,?)',
      [
        rol,
        description
      ]
    )

    return res.status(200).json({ message: 'Rol created' })

  } catch (error) {
    return res.status(500)
      .json({ 
        message: error.message 
      })
  }
}

export const getRol = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT * FROM Roles WHERE rol = ?',
      [req.params.rol]
    )

    if (result.length === 0) return res.status(404).json({ message: 'Rol not found' })

    res.json(result[0])

  } catch (error) {
    return res.status(500)
      .json({ 
        message: error.message 
      })
  }
}

export const getRoles = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT * FROM Roles ORDER BY id ASC'
    )

    res.json(result)

  } catch (error) {
    return res.status(500)
      .json({ 
        message: error.message 
      })
  }
}

export const updateRol = async (req, res) => {}

export const toggleRolStatus = async (req, res) => {}