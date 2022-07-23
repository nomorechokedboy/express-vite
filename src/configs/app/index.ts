import { routerV1 } from '@/api';
import { corsOptions } from '@/configs';
import { errorHandler, logErrors, notFound } from '@/middlewares';
import cors from 'cors';
import express, { Request, Response } from 'express';
import { connectDb } from '../db';
import { MORGAN } from '../env';
import { myFormat } from '../morgan';

connectDb();

export const app = express();

app.use(cors(corsOptions));
app.use(express.json({}));
app.use(
  express.urlencoded({
    extended: true,
  }),
);

if (MORGAN === '1') {
  app.use('/*', myFormat);
}

app.use('/v1/api', routerV1);
app.use('/', (_: Request, res: Response) =>
  res.json({ message: 'Hello world!' }),
);
app.use(logErrors);
app.use(errorHandler);
app.use(notFound);
