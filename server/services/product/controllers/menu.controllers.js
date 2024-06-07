import { pool } from "../models/product.model.js"

export const getMenus = async (req, res) => {
  try {
    const [result] = await pool.query(
      `
        SELECT * 
        FROM Menus 
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

export const getMenu = async (req, res) => {
  try {

    const [result] = await pool.query(
      `
        SELECT Menus.id, Menus.name, Products.name, Categories.name AS category_name
        FROM Menus
        INNER JOIN Int_products_menus 
          ON Int_products_menus.menu_id = Menus.id
        INNER JOIN Products 
          ON Products.id = Int_products_menus.product_id
        INNER JOIN Categories 
          ON Products.category_id = Categories.id
        WHERE Menus.id = ?
      `,
      [
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

export const createMenu = async (req, res) => {
  const {
    name,
    description,
    status,
    image,
    category_id,
    type_id,
    price
  } = req.body

  try {
    const [result] = await pool.query(
      `
        INSERT INTO Menus (
          name,
          description,
          status,
          image,
          category_id,
          type_id,
          price
        ) VALUES (?,?,?,?,?,?,?)
      `,
      [
        name,
        description,
        status,
        image,
        category_id,
        type_id,
        price
      ]
    )

    res.send({
      id: result.insertId,
      name,
      description,
      status,
      image,
      category_id,
      type_id,
      price
    })

  } catch (error) {
    return res.status(500)
      .json({
        message: error.message
      })
  }
}

export const updateMenu = async (req, res) => {
  const {
    name,
    description,
    status,
    image,
    category_id,
    type_id,
    price
  } = req.body

  try {
    const [result] = await pool.query(
      `
        UPDATE Menus
        SET ?
        WHERE id = ?
      `,
      [
        name,
        description,
        status,
        image,
        category_id,
        type_id,
        price
      ],
      req.params.id
    )

    res.send({
      id: result.insertId,
      name,
      description,
      status,
      image,
      category_id,
      type_id,
      price
    })

  } catch (error) {
    return res.status(500)
      .json({
        message: error.message
      })
  }
}

export const deleteMenu = async (req, res) => {
  try {
    const [result] = await pool.query(
      `
        DELETE FROM Menus
        WHERE id = ?
      `,
      [
        req.params.id
      ]
    )

    if (result.affectedRows === 0) return res.status(404).json({
      message: 'Menu not found'
    })

    res.sendStatus(204)
    
  } catch (error) {
    return res.status(500)
      .json({
        message: error.message
      })
  }
}