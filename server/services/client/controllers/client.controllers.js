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
    return res.status(500)
      .json({
        message: error.message
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
    return res.status(500)
      .json({
        message: error.message
      })
  }
}

export const createClient = async (req, res) => {
  const { 
    name,
    lastname,
    area_phone,
    number_phone,
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
        area_phone,
        number_phone,
        req.decoded.id,
        new Date(),
        new Date()
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

export const updateClient = async (req, res) => {
  const { 
    name,
    lastname,
    area_phone,
    number_phone,
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
          area_phone,
          number_phone,
          user_id: req.decoded.id,
          updated_at: new Date()
        },
        req.params.id
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

export const deleteClient = async (req, res) => {
  try {
    const [result] = await pool.query(
      `
        DELETE FROM Clients 
        WHERE id = ?
      `,
      [req.params.id]
    ) 

    if (result.affectedRows === 0) return res.status(404).json({
      message: 'Client not found'
    })

    return res.sendStatus(204)

  } catch (error) {
    return res.status(500)
      .json({
        message: error.message
      })
  }
}