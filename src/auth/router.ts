import { Router } from 'express';
import { login, register } from './controller';
import { isValidUserBody } from './validate';

export const authRouter = Router();

authRouter.post('/register', isValidUserBody, register);
authRouter.post('/login', login);
