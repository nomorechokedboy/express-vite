import dotenv from 'dotenv';

dotenv.config();

export const { PORT, MORGAN, SECRET_KEY, REFRESH_KEY, DATABASE_URL, NODE_ENV } =
  process.env;
