import { pool } from '../models/product.model.js'

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
    console.error('Error en getMenus:', error)
    return res.status(500)
      .json({
        message: 'Error al consultar los menus'
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
    console.error('Error en getMenu:', error)
    return res.status(500)
      .json({
        message: 'Error al consultar un menu registrado'
      })
  }
}

export const createMenu = async (req, res) => {
  const {
    name,
    description,
    status,
    image,
    categoryId,
    typeId,
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
          price,
          user_id_created,
          created_at,
          user_id_updated,
          updated_at
        ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)
      `,
      [
        name,
        description,
        status,
        image,
        categoryId,
        typeId,
        price,
        req.decoded.id,
        new Date(),
        req.decoded.id,
        new Date()
      ]
    )

    res.send({
      id: result.insertId,
      name,
      description,
      status,
      image,
      categoryId,
      typeId,
      price
    })
  } catch (error) {
    console.error('Error en createMenu:', error)
    return res.status(500)
      .json({
        message: 'Error al insertar el menu'
      })
  }
}

export const updateMenu = async (req, res) => {
  const {
    name,
    description,
    status,
    image,
    categoryId,
    typeId,
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
        {
          name,
          description,
          status,
          image,
          category_id: categoryId,
          type_id: typeId,
          price,
          user_id_updated: req.decoded.id,
          updated_at: new Date()
        }
      ],
      req.params.id
    )

    res.send({
      id: result.insertId,
      name,
      description,
      status,
      image,
      categoryId,
      typeId,
      price
    })
  } catch (error) {
    console.error('Error en updateMenu:', error)
    return res.status(500)
      .json({
        message: 'Error al actualizar el menu'
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

    if (result.affectedRows === 0) return res.status(404).json({ message: 'Menu no encontrado' })

    res.sendStatus(204)
  } catch (error) {
    console.error('Error en deleteMenu:', error)
    return res.status(500)
      .json({
        message: 'Error al eliminar el menu'
      })
  }
}
