import express from 'express'
import { mongooseConection } from './Others/Database.js';
import dotenv from 'dotenv'
import { UserRouter } from './Router/UserRouter.js';
import cookieParser from 'cookie-parser';
import { ProdectRouter } from './Router/ProdectRouter.js';
import path from 'path'
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