import { PrismaClient } from '@prisma/client';

export default function connectDb() {
  MONGODB &&
    mongoose
      .connect(MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as mongoose.ConnectOptions)
      .then(async (_: typeof mongoose) => {
        console.log('Connect Mongodb Success!');
      })
      .catch((e) => console.error(e));
}
