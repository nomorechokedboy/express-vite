import mongoose from 'mongoose';
import { User } from './entity';
import bcrypt from 'bcrypt';

const schema = new mongoose.Schema<User>({
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
  if (this.isNew || this.isModified('password')) {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }

  next();
});

// schema.pre<User & mongoose.Document>("updateOne", function (next) {
//   if (
//     this.update.hasOwnProperty("$set") &&
//     this.update["$set"].hasOwnProperty("password")
//   ) {
//     var salt = bcrypt.genSaltSync(10);
//     this.update["$set"].password = bcrypt.hashSync(
//       this.update["$set"].password,
//       salt
//     );
//   }
//   next();
// });

export const userModel = mongoose.model<User>('slearningUser', schema);
