import { pool } from '../models/client.model.js'

export const getClients = async (req, res) => {
  try {
    const [result] = await pool.query(
      `
        SELECT * 
        FROM Clients 
        ORDER BY Clients.id ASC
      `
    )

    res.json(result)
  } catch (error) {
    console.error('Error en getClients:', error)
    return res.status(500)
      .json({
        message: 'Error al consultar los clientes'
      })
  }
}

export const getClient = async (req, res) => {
  const { lastname } = req.body
  req.params.client = req.body.name

  try {
    const [result] = await pool.query(

      `
        SELECT Clients.name, Clients.lastname, Clients.area_phone, Clients.status, Directions.street, Directions.number_street, Directions.postal_code, Directions.floor, Directions.departament, Directions.lote, Directions.block, Directions.neighborhood, Directions.city, Directions.locality, Directions.state
        FROM Clients
        INNER JOIN Int_clients_directions
            ON Int_clients_directions.client_id = Clients.id
        INNER JOIN Directions
            ON Directions.id = Int_clients_directions.direction_id
        WHERE Clients.name = ? AND Clients.lastname = ?
      `,
      [
        req.params.client,
        lastname
      ]
    )

    res.json(result)
  } catch (error) {
    console.error('Error en getClient:', error)
    return res.status(500)
      .json({
        message: 'Error al consultar el cliente'
      })
  }
}

export const createClient = async (req, res) => {
  const {
    name,
    lastname,
    areaPhone,
    numberPhone
  } = req.body

  try {
    const [result] = await pool.query(
      `
        INSERT INTO Clients (
          name,
          lastname,
          area_phone,
          number_phone,
          user_id,
          created_at,
          updated_at
        ) VALUES (?,?,?,?,?,?,?)
      `,
      [
        name,
        lastname,
        areaPhone,
        numberPhone,
        req.decoded.id,
        new Date(),
        new Date()
      ]
    )

    res.json(result)
  } catch (error) {
    console.error('Error en createClient:', error)
    return res.status(500)
      .json({
        message: 'Error al crear el cliente'
      })
  }
}

export const updateClient = async (req, res) => {
  const {
    name,
    lastname,
    areaPhone,
    numberPhone
  } = req.body

  try {
    const [result] = await pool.query(
      `
        UPDATE Clients 
        SET ? 
        WHERE id = ?
      `,
      [
        {
          name,
          lastname,
          areaPhone,
          numberPhone,
          user_id: req.decoded.id,
          updated_at: new Date()
        },
        req.params.id
      ]
    )

    res.json(result)
  } catch (error) {
    console.error('Error en updateClient:', error)
    return res.status(500)
      .json({
        message: 'Error al actualizar el cliente'
      })
  }
}

export const deleteClient = async (req, res) => {
  try {
    const [result] = await pool.query(
      `
        DELETE FROM Clients 
        WHERE id = ?
      `,
      [req.params.id]
    )

    if (result.affectedRows === 0) return res.status(404).json({ message: 'Client not found' })

    return res.sendStatus(204)
  } catch (error) {
    console.error('Error en deletedClient:', error)
    return res.status(500)
      .json({
        message: 'Error al eliminar el cliente'
      })
  }
}
