import { routerV1 } from '@/api';
import { corsOptions } from '@/configs';
import { MORGAN } from '../env';
import { errorHandler, logErrors, notFound } from '@/middlewares';
import cors from 'cors';
import express, { Request, Response } from 'express';
import { connectDb } from '../db';
import { morgan } from '../morgan';

connectDb();

export const app = express();

app.use(cors(corsOptions));
app.use(express.json({}));
app.use(
  express.urlencoded({
    extended: true,
  }),
);

const myFormat = morgan('myFormat');

if (MORGAN === '1') {
  app.use('*', myFormat);
}

app.use('/v1/api', routerV1);
app.use('/', (_: Request, res: Response) => res.send('Hello World'));
app.use(logErrors);
app.use(errorHandler);
app.use(notFound);
