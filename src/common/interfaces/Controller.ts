import { Request } from './BaseRequest';
import { Response } from './BaseResponse';
import { NextFunction } from './NextFunction';

export interface Controller {
  exec(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void>;
}
