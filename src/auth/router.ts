import { Router } from 'express';
import { login, register } from './controller';
import { isValidLoginBody, isValidRegisterBody } from './validate';

export const authRouter = Router();

authRouter.post('/register', isValidRegisterBody, register);
authRouter.post('/login', isValidLoginBody, login);
