import express from 'express'
import { getAllprodect, postProdect, prodect, UserPost } from '../Controller/prodectController.js'
import { Authentication } from '../Other/Authenitication.js'
import { upload } from '../Other/multer.js'

export const ProdectRouter = express.Router()

ProdectRouter.post('/post',Authentication,upload.single("Image"),postProdect)
ProdectRouter.get('/get',Authentication,getAllprodect)
ProdectRouter.get('/userProdect',Authentication,UserPost)
ProdectRouter.get('/ProdectDetalis/:id',Authentication,prodect);