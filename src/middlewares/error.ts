import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../custom';

export const notFound = (req: Request, res: Response): void => {
  res.status(404);
  res.json({
    error: 'Not found',
    path: req.url,
  });
};

export const errorHandler = (
  e: Error,
  _: Request,
  res: Response,
  _1: NextFunction,
): Response => {
  if (e instanceof HttpException) {
    return res.status(e.status).json({ error: JSON.parse(e.message) });
  }

  console.log('Not HttpException');

  return res.status(500).json({ error: e.message });
};

export const logErrors = (
  err: HttpException,
  _: Request,
  _1: Response,
  next: NextFunction,
): void => {
  console.log('Server error #' + new Date().toString());
  console.error(err.stack);

  next(err);
};
