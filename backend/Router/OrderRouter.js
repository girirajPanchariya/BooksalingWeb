import express from 'express'
import { ProdectOrder } from '../Controller/OrderController.js'
import { Authentication } from '../Other/Authenitication.js'

export const OrderRouter = express.Router()

OrderRouter.post('/post/:ProdectId',Authentication,ProdectOrder)