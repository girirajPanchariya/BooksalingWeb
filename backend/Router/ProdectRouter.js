import express from 'express'
import { Authentication } from '../Others/Authenication.js'
import { getAllprodect, postProdect, prodect, UserPost } from '../Controller/prodectController.js'
import { upload } from '../Others/multer.js'

export const ProdectRouter = express.Router()

ProdectRouter.post('/post',Authentication,upload.single("Image"),postProdect)
ProdectRouter.get('/get',Authentication,getAllprodect)
ProdectRouter.get('/userProdect',Authentication,UserPost)
ProdectRouter.get('/ProdectDetalis/:id',Authentication,prodect);