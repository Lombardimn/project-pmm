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
    console.error('Error en getProducts:', error)
    return res.status(500)
      .json({
        message: 'Error al consultar los productos'
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
    console.error('Error en getProduct:', error)
    return res.status(500)
      .json({
        message: 'Error al consultar el producto'
      })
  }
}

export const createProduct = async (req, res) => {
  const {
    name,
    description,
    categoryId,
    typeId,
    brandId,
    image,
    unitId,
    priceUnit,
    minStock,
    maxStock
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
        categoryId,
        typeId,
        brandId,
        image,
        unitId,
        priceUnit,
        minStock,
        maxStock
      ]
    )

    res.json(result)
  } catch (error) {
    console.error('Error en createProduct:', error)
    return res.status(500)
      .json({
        message: 'Error al crear el producto'
      })
  }
}

export const updateProduct = async (req, res) => {
  const {
    name,
    description,
    categoryId,
    typeId,
    brandId,
    image,
    unitId,
    priceUnit,
    minStock,
    maxStock
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
          category_id: categoryId,
          type_id: typeId,
          brand_id: brandId,
          image,
          unit_id: unitId,
          price_unit: priceUnit,
          min_stock: minStock,
          max_stock: maxStock,
          updated_at: new Date()
        },
        req.params.id
      ]
    )

    res.json(result)
  } catch (error) {
    console.error('Error en updateProduct:', error)
    return res.status(500)
      .json({
        message: 'Error al actualizar el producto'
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

    if (result.affectedRows === 0) return res.status(404).json({ message: 'Product not found' })

    return res.sendStatus(204)
  } catch (error) {
    console.error('Error en deleteProduct:', error)
    return res.status(500)
      .json({
        message: 'Error al eliminar el producto'
      })
  }
}
