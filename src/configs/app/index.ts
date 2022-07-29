import { routerV1 } from '@/api';
import { corsOptions } from '@/configs';
import { errorHandler, logErrors, notFound } from '@/middlewares';
import cors from 'cors';
import express from 'express';
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

app.use('/healthcheck', (_, res) => res.json({ message: 'Ok' }));
app.use('/api', routerV1);
app.use(logErrors);
app.use(errorHandler);
app.use(notFound);
