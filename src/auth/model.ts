import mongoose, { model, Schema } from 'mongoose';
import { User } from './entity';
import bcrypt from 'bcrypt';

const schema = new Schema<User>({
  email: {
    type: String,
    minlength: 3,
    required: true,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  studentId: {
    type: Number,
    min: 100000,
    required: true,
  },
});

schema.pre<User & mongoose.Document>('save', function (next) {
  if (this.isNew || this.isModified) {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }

  next();
});

export const userModel = model<User>('slearningUser', schema);
