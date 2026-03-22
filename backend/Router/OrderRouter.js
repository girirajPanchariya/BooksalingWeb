import express from 'express'
import { Authentication } from '../Others/Authenication.js'
import { ProdectOrder } from '../Controller/OrderController.js'

export const OrderRouter = express.Router()

OrderRouter.post('/post/:ProdectId',Authentication,ProdectOrder)