import dotenv from 'dotenv';

dotenv.config();
export const { PORT, MORGAN, MONGODB, SECRET_KEY, REFRESH_KEY, DATABASE_URL } =
  process.env;
