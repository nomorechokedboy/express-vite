import { routerV1 } from '@/api';
import { corsOptions } from '../cors';
import { errorHandler, logErrors, notFound } from '@/middlewares';
import cors from 'cors';
import express from 'express';
import { connectDb } from '../db';
import { MORGAN } from '../env';
import { myFormat } from '../morgan';
import { HttpException } from '@/custom';

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

app.use('/healthcheck', async (_, res, next) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'I am fine',
    timestamp: Date.now(),
  };

  try {
    res.json(healthcheck);
  } catch (e) {
    if (e instanceof Error) next(new HttpException(e.message, 503));
  }
});
app.use('/api/v1', routerV1);
app.use(logErrors);
app.use(errorHandler);
app.use(notFound);
