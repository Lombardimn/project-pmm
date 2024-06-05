// ROUTES

export const PORT = process.env.PORT || 3000

// TOKEN

export const TOKEN_KEY = process.env.TOKEN_KEY || "token"

// DATABASE

export const DB_HOST = process.env.DB_HOST || "localhost"
export const DB_PORT = process.env.DB_PORT || "3306"
export const DB_USER = process.env.DB_USER || "root"
export const DB_PASSWORD = process.env.DB_PASSWORD || "root"

export const DB_DATABASE = process.env.DB_DATABASE || "pmm"
export const DB_USER_DATABASE = process.env.DB_USER_DATABASE || "user"
export const DB_CLIENT_DATABASE = process.env.DB_CLIENT_DATABASE || "client"
export const DB_PRODUCT_DATABASE = process.env.DB_PRODUCT_DATABASE || "product"