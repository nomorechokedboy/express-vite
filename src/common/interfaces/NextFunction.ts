import { HttpException } from '@/custom';

export interface NextFunction {
  exec(e: Error | HttpException): void;
}
