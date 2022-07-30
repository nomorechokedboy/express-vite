import { CorsOptions } from 'cors';
import { PORT } from '../env';

const whitelist = [
  `http://localhost:${PORT}`,
  'http://slearning.tk',
  'https://slearning.tk',
];

export const corsOptions: CorsOptions = {
  origin: whitelist,
  optionsSuccessStatus: 200,
};
