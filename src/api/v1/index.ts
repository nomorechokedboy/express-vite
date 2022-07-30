import { authRouter } from '@/auth';
import { Router } from 'express';

export const routerV1 = Router();

routerV1.use('/auth', authRouter);
