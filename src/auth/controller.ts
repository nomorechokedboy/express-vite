import { NextFunction, Request, Response } from 'express';
import { DATABASE_URL } from '../configs';
import { HttpException } from '../custom';

export const register = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  try {
    res.json({ success: true, data: req.body });
  } catch (e) {
    next(new HttpException('Register error'));
  }
};

export const login = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  try {
    res.json({ path: req.path, DATABASE_URL });
  } catch (e) {
    next(new HttpException('Login error'));
  }
};
