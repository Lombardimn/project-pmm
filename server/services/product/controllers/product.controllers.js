import { pool } from '../models/product.model.js'

export const getProducts = async (req, res) => {
  try {
  const [result] = await pool.query(
    `
      SELECT * 
      FROM Products 
      ORDER BY id ASC
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

export const getProduct = async (req, res) => {
  const { name } = req.body

  try {
    const [result] = await pool.query(
      `
        SELECT * FROM Products 
        WHERE Products.id = ? AND Products.name = ?
      `,
      [
        req.params.id,
        name
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

export const createProduct = async (req, res) => {
  const {
    name,
    description,
    category_id,
    type_id,
    brand_id,
    image,
    unit_id,
    price_unit,
    min_stock,
    max_stock
  } = req.body

  try {
    const [result] = await pool.query(
      `
        INSERT INTO Products (
          name,
          description,
          category_id,
          type_id,
          brand_id,
          image,
          unit_id,
          price_unit,
          min_stock,
          max_stock
        ) VALUES (?,?,?,?,?,?,?,?,?,?)
      `,
      [
        name,
        description,
        category_id,
        type_id,
        brand_id,
        image,
        unit_id,
        price_unit,
        min_stock,
        max_stock
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

export const updateProduct = async (req, res) => {
  const {
    name,
    description,
    category_id,
    type_id,
    brand_id,
    image,
    unit_id,
    price_unit,
    min_stock,
    max_stock
  } = req.body

  try {
    const [result] = await pool.query(
      `
        UPDATE Products
        SET ?
        WHERE id = ?
      `,
      [
        {
          name,
          description,
          category_id,
          type_id,
          brand_id,
          image,
          unit_id,
          price_unit,
          min_stock,
          max_stock,
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

export const deleteProduct = async (req, res) => {
  try {
    const [result] = await pool.query(
      `
        DELETE FROM Products
        WHERE id = ?
      `,
      [
        req.params.id
      ]
    )

    if (result.affectedRows === 0) return res.status(404).json({
      message: 'Product not found'
    })

    return res.sendStatus(204)

  } catch (error) {
    return res.status(500)
      .json({
        message: error.message
      })
  }
}