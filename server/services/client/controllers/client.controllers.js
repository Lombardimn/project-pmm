export const getClients = async (req, res) => {
  try {
    const [result] = await pool.query(
      `
        SELECT Clients.*, Directions.*
        FROM Clients
        INNER JOIN Int_clients_directions
            ON Int_clients_directions.client_id = Clients.id
        INNER JOIN Directions
            ON Directions.id = Int_clients_directions.direction_id
        WHERE Clients.name = 'John' AND Clients.lastname = 'Doe';
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
  const { last_name } = req.body
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
        last_name
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