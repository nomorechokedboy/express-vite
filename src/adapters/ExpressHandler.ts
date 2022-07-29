import { Controller } from '@/common';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ExpressNext } from './NextFunction';
import { ExpressRequest } from './Request';
import { ExpressResponse } from './Response';

export const ExpressHandler =
  (controller: Controller): RequestHandler =>
  (req: Request, res: Response, next: NextFunction) =>
    controller.exec(
      new ExpressRequest(req),
      new ExpressResponse(res),
      new ExpressNext(next),
    );
