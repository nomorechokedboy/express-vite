import { ObjectId, ObjectIdLike } from 'bson';
import Validator from 'validatorjs';

type IsValidObjectIdInput =
  | string
  | number
  | ObjectId
  | ObjectIdLike
  | Buffer
  | Uint8Array;

Validator.register(
  'ObjectId',
  (value, _, _1) => ObjectId.isValid(value as IsValidObjectIdInput),
  'The :attribute is not ObjectId',
);

export { Validator };
