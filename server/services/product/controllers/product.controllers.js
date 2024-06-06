export const getProducts = async (req, res) => {
  res.json('Products')
}

export const getProduct = async (req, res) => {
  res.json('Product ' + req.params.id)
}

export const createProduct = async (req, res) => {}

export const updateProduct = async (req, res) => {}

export const deleteProduct = async (req, res) => {}