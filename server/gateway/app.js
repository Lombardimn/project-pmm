import express from "express"
import morgan from 'morgan'
import cookieParset from 'cookie-parser'

import indexRoutes from "./routes/index.routes.js"
import authRoutes from "../services/user/routes/auth.routes.js"
import userRoutes from "../services/user/routes/users.routes.js"
import rolRoutes from "../services/user/routes/rol.routes.js"
import clientRoutes from "../services/client/routes/client.routes.js"
import productRoutes from "../services/product/routes/product.routes.js"

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParset())

//ACCESS CONTROL API V1
app.use('/api/v1', indexRoutes)
app.use('/api/v1', authRoutes)
app.use('/api/v1', userRoutes)
app.use('/api/v1', rolRoutes)
app.use('/api/v1', clientRoutes)
app.use('/api/v1', productRoutes)

export default app