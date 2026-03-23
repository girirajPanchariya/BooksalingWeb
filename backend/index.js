
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import path from 'path'
import { mongooseConection } from './Other/DBConecton.js';
import { UserRouter } from './Router/UserRouter.js';
import { ProdectRouter } from './Router/ProdectRouter.js';
import { OrderRouter } from './Router/OrderRouter.js';
dotenv.config()

const app = express()
app.use(express.json())
app.use(cookieParser())

// ✅ ADD THIS LINE
app.use('/uploads', express.static('uploads'))

app.use('/user', UserRouter)
app.use('/prodect', ProdectRouter)
app.use('/order',OrderRouter)

const PORT = 5000

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
    mongooseConection()
    })