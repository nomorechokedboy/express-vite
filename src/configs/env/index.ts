import dotenv from 'dotenv';

dotenv.config();
export const { PORT, SECRET_KEY, REFRESH_KEY, DATABASE_URL, MORGAN } =
  process.env;
