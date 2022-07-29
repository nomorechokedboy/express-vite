import { ExpressHandler } from '@/adapters/ExpressHandler';
import { Router } from 'express';
import { userModel } from './model';
import { LoginController } from './adapter/LoginController';
import { login, register } from './controller';
import { LoginUseCase } from './useCases/login';
import { isValidLoginBody, isValidRegisterBody } from './validate';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { MongoRepo } from '@/adapters';

export const authRouter = Router();

authRouter.post('/register', isValidRegisterBody, register);
authRouter.post('/login', isValidLoginBody, login);
authRouter.post(
  '/login/clean',
  isValidLoginBody,
  ExpressHandler(
    new LoginController(
      new LoginUseCase(new MongoRepo(userModel), bcrypt, jwt),
    ),
  ),
);
