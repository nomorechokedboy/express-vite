import cors from 'cors';
import express, { Handler, Request, Response } from 'express';
import morgan from 'morgan';
import { routerV1 } from '../../api';
import { errorHandler, logErrors, notFound } from '../../middlewares';
import { corsOptions } from '../cors';

export const app = express();

app.use(cors(corsOptions));
app.use(express.json({}));
app.use(
  express.urlencoded({
    extended: true,
  }),
);

morgan.format(
  'myFormat',
  '[:date[clf]] ":method :url" :status :res[content-length] - :response-time ms',
);

// const myFormat = morgan('myFormat');

// if (MORGAN === '1') {
app.use('/*', morgan('myFormat') as Handler);
// }

app.use('/v1/api', routerV1);
app.use('/', (_: Request, res: Response) => res.send('Hello cai dmm luon'));
app.use(logErrors);
app.use(errorHandler);
app.use(notFound);
