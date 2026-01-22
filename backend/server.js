import express from 'express';
import dotenv from 'dotenv';
import { DBConnection } from './Other/DBConecton.js';
import cors from 'cors';
import { UserRouter } from './Router/UserRouter.js';
import cookieParser from 'cookie-parser';
dotenv.config();


const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(cookieParser())
app.use('/user', UserRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  DBConnection()
})