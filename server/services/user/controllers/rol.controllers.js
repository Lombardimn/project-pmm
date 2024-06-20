import { pool } from '../models/user.model.js'

export const createRol = async (req, res) => {
  const { rol, description } = req.body

  try {
    await pool.query(
      'INSERT INTO Roles (rol, description, user_id_create, created_at, user_id_update, updated_at) VALUES (?,?,?,?,?,?)',
      [
        rol,
        description,
        req.decoded.id,
        new Date(),
        req.decoded.id,
        new Date()
      ]
    )

    return res.status(200).json({ message: 'Rol creado' })
  } catch (error) {
    console.error('Error en createRol:', error)
    return res.status(500)
      .json({
        message: 'Error al crear un rol'
      })
  }
}

export const getRol = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT * FROM Roles WHERE rol = ?',
      [req.params.rol]
    )

    if (result.length === 0) return res.status(404).json({ message: 'Rol no encontrado' })

    res.json(result[0])
  } catch (error) {
    console.error('Error en getRol:', error)
    return res.status(500)
      .json({
        message: 'Error al consultar un rol registrado'
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
    console.error('Error en getRoles:', error)
    return res.status(500)
      .json({
        message: 'Error al consultar los roles registrados'
      })
  }
}

export const updateRol = async (req, res) => {
  const { rol, description, active } = req.body

  try {
    const [result] = await pool.query(
      'UPDATE Roles SET ? WHERE rol = ?',
      [
        {
          rol,
          description,
          active,
          user_id_update: req.decoded.id,
          updated_at: new Date()
        },
        req.params.rol
      ]
    )

    res.json(result)
  } catch (error) {
    console.error('Error en updateUsers:', error)
    return res.status(500)
      .json({
        message: 'Error al actualizar el rol ' + req.params.rol
      })
  }
}
