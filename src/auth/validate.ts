import { NextFunction, Request, Response } from 'express';
import { Validator } from '@libs';
import { User } from './entity';
import { HttpException } from '../custom';

const rule = {
  email: 'required|email',
  password: [
    'required',
    'regex:/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/',
  ],
  studentId: 'required|numeric|min:8',
};

export const isValidUserBody = (
  req: Request,
  _: Response,
  next: NextFunction,
): void => {
  const { email, password, studentId } = req.body;
  const data: User = { email, password, studentId };

  const validation = new Validator(data, rule);
  if (validation.fails()) {
    console.log(validation.errors.all());

    return next(new HttpException('Validate error'));
  }

  req.user = data;
  next();
};
