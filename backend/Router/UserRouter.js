import express from 'express'
import { LogintUser, LogoutUser, Register, UpdateUser, UserProfile } from '../Controller/UserController.js'
import { Authentication } from '../Others/Authenication.js';

export const UserRouter = express.Router()


UserRouter.post('/Register',Register);
UserRouter.post('/login',LogintUser);
UserRouter.get('/logout',Authentication,LogoutUser)
UserRouter.get('/profile',Authentication,UserProfile)
UserRouter.put('/update',Authentication,UpdateUser)