<<<<<<< HEAD
import express from 'express'
import { LogintUser, LogoutUser, Register, UpdateUser, UserProfile } from '../Controller/UserController.js'
import { Authentication } from '../Others/Authenication.js';

export const UserRouter = express.Router()


UserRouter.post('/Register',Register);
UserRouter.post('/login',LogintUser);
UserRouter.get('/logout',Authentication,LogoutUser)
UserRouter.get('/profile',Authentication,UserProfile)
UserRouter.put('/update',Authentication,UpdateUser)
=======
import express from 'express';
import { GetUserProfile, LoginUser, logout, RegisterUser, VerifyEmail } from '../Controller/UserContorller.js';
import { jwtTokenGenerateor } from '../Other/Authenitication.js';

export const UserRouter = express.Router();

UserRouter.post('/register',RegisterUser);
UserRouter.post('/verify',VerifyEmail);
UserRouter.post('/login',LoginUser);
UserRouter.get('/logout',jwtTokenGenerateor,logout);
UserRouter.get('/user',jwtTokenGenerateor,GetUserProfile);

>>>>>>> 8b5693da49838ff7bd6a6e720bed888783bef530
