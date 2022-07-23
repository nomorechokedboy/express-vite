import { NextFunction, Request, Response } from 'express';
import { Validator } from '@libs';
import { User } from './entity';
<<<<<<< HEAD
import { HttpBody, HttpException } from '../custom';
=======
import { HttpException } from '../custom';
>>>>>>> f1c5115 (Fix coverage empty, add README and clean up import)

const baseRule = {
  email: 'required|email',
  password: [
    'required',
    'regex:/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/',
  ],
};

const registerRule = {
  ...baseRule,
  studentId: 'required|numeric|min:8',
};

type ExpressMiddleware = (
  req: Request<unknown, unknown, HttpBody>,
  res: Response,
  next: NextFunction,
) => void;

export const isValidRegisterBody: ExpressMiddleware = (req, _, next) => {
  const { email, password, studentId } = req.body;
  const data: Omit<User, '_id'> = { email, password, studentId };

  const validation = new Validator(data, registerRule);
  if (validation.fails()) {
    console.log(validation.errors.all());

    return next(new HttpException('Validate error'));
  }

  req.user = data;
  next();
};

export const isValidLoginBody: ExpressMiddleware = (req, _, next) => {
  const { email, password } = req.body;
  const data: Omit<User, 'studentId'> = { email, password };

  const validation = new Validator(data, baseRule);
  if (validation.fails()) {
    return next(new HttpException('Validate error'));
  }

  next();
};
