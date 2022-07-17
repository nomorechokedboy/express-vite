import mongoose from 'mongoose';
import Validator from 'validatorjs';

interface ObjectIdLike {
  id: string | Buffer;
  __id?: string;
  toHexString(): string;
}

type IsValidObjectIdInput =
  | string
  | number
  | mongoose.Types.ObjectId
  | ObjectIdLike
  | Buffer
  | Uint8Array;

Validator.register(
  'ObjectId',
  (value, _, _1) =>
    mongoose.Types.ObjectId.isValid(value as IsValidObjectIdInput),
  'The :attribute is not ObjectId',
);

export { Validator };
