import { pool } from '../models/product.model.js'

export const getProducts = async (req, res) => {
  try {
  const [result] = await pool.query(
    'SELECT * FROM Products ORDER BY id ASC'
  )

  res.json(result)

  } catch (error) {
    return res.status(500)
      .json({
        message: error.message
      })    
  }
}

export const getProduct = async (req, res) => {
  const { name } = req.body

  try {
    const [result] = pool.query(
    'SELECT * FROM Products WHERE Products.id = ? AND Products.name = ?',
      [
        req.params.id,
        name
      ]
    )
  
    console.log(result)
    res.json(result + req.params.id)

  } catch (error) {
    return res.status(500)
      .json({
        message: error.message
      })
  }
}

export const createProduct = async (req, res) => {}

export const updateProduct = async (req, res) => {}

export const deleteProduct = async (req, res) => {}