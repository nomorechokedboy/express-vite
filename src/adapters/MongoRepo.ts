import { User } from '@/auth';
import { Repository } from '@/common';
import { FilterQuery, Model } from 'mongoose';

export class MongoRepo implements Repository<User> {
  constructor(private readonly model: Model<User>) {}

  async findOne(filter: FilterQuery<User>): Promise<User> {
    try {
      const result = await this.model.findOne(filter).lean().exec();
      if (!result?._id) throw Error('_id is undefined');
      if (!result?.email) throw Error('email is undefined');
      if (!result?.password) throw Error('password is undefined');
      if (!result?.studentId) throw Error('studentId is undefined');

      return {
        _id: result._id,
        email: result.email,
        password: result.password,
        studentId: result.studentId,
      };
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
