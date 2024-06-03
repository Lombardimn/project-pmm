export const getClients = async (req, res) => {
  try {
    const [result] = await pool.query(
      `
        SELECT *
        FROM Clients
        JOIN Client_relation
        ON Clients.id = Client_relation.id
        JOIN Directions
        ON Client_relation.Direction_id = Directions.id
        ORDER BY Client.id ASC
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
  try {
    const [result] = await pool.query(
      'SELECT * FROM Clients WHERE id = ?',
      [req.params.client]
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
    last_name,
    area_phone,
    number_phone,
    street,
    number_street,
    postal_code,
    floor,
    apartment,
    block,
    neighborhood,
    city,
    locality,
    state,
  } = req.body

  try {
    
  } catch (error) {
    
  }
}

export const updateClient = async (req, res) => { }

export const deleteClient = async (req, res) => { }