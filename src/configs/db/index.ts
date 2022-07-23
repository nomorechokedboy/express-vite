import mongoose from 'mongoose';
import { DATABASE_URL } from '../env';

export const connectDb = async (): Promise<void> => {
  try {
    if (!DATABASE_URL) throw new Error(`Invalid DATABASE_URL: ${DATABASE_URL}`);

    await mongoose.connect(DATABASE_URL + 'Test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
    console.log(`Connect to Url: ${DATABASE_URL} Success!`);
  } catch (e: unknown) {
    console.log(e);
  }
};
