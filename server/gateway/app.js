import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import indexRoutes from './routes/index.routes.js'
import authRoutes from '../services/user/routes/auth.routes.js'
import userRoutes from '../services/user/routes/users.routes.js'
import rolRoutes from '../services/user/routes/rol.routes.js'
import clientRoutes from '../services/client/routes/client.routes.js'
import productRoutes from '../services/product/routes/product.routes.js'
import menuRoutes from '../services/product/routes/menu.routes.js'

const app = express()

app.use(morgan('dev'))
app.use(cors(
  {
    origin: 'http://localhost:5173',
    credentials: true
  }
))
app.use(express.json())
app.use(cookieParser())

// ACCESS CONTROL API V1

app.use('/api/v1', indexRoutes)
app.use('/api/v1', authRoutes)
app.use('/api/v1', userRoutes)
app.use('/api/v1', rolRoutes)
app.use('/api/v1', clientRoutes)
app.use('/api/v1', productRoutes)
app.use('/api/v1', menuRoutes)

export default app
