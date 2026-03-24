import express from 'express'
import { Authentication } from '../Other/Authenitication.js';
import { LogintUser, LogoutUser, Register, UpdateUser, UserProfile } from '../Controller/UserContorller.js';

export const UserRouter = express.Router()


UserRouter.post('/Register',Register);
UserRouter.post('/login',LogintUser);
UserRouter.get('/logout',Authentication,LogoutUser)
UserRouter.get('/profile',Authentication,UserProfile)
UserRouter.put('/update',Authentication,UpdateUser)
