import { Bcrypt, ExpressHandler, JwtService, MongoRepo } from '@/adapters';
import { Router } from 'express';
import { userModel } from './model';
import { LoginController } from './adapter/LoginController';
import { login, register } from './controller';
import { LoginUseCase } from './useCases';
import { isValidLoginBody, isValidRegisterBody } from './validate';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const authRouter = Router();

authRouter.post('/register', isValidRegisterBody, register);
authRouter.post('/login', isValidLoginBody, login);
authRouter.post(
  '/login/clean',
  isValidLoginBody,
  ExpressHandler(
    new LoginController(
      new LoginUseCase(
        new MongoRepo(userModel),
        new Bcrypt(bcrypt),
        new JwtService(jwt),
      ),
    ),
  ),
);
