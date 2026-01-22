import express from 'express';
import { GetUserProfile, LoginUser, logout, RegisterUser, VerifyEmail } from '../Controller/UserContorller.js';
import { jwtTokenGenerateor } from '../Other/Authenitication.js';

export const UserRouter = express.Router();

UserRouter.post('/register',RegisterUser);
UserRouter.post('/verify',VerifyEmail);
UserRouter.post('/login',LoginUser);
UserRouter.get('/logout',jwtTokenGenerateor,logout);
UserRouter.get('/user',jwtTokenGenerateor,GetUserProfile);

