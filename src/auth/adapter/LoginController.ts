import { Controller, Request, Response, NextFunction } from '@/common';
import { HttpException } from '@/custom';
import { LoginUseCase } from '../useCases/login';

export class LoginController implements Controller {
  constructor(private readonly useCase: LoginUseCase) {}

  async exec(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const { email, password } = req.body;
    try {
      const result = await this.useCase.exec({ email, password });
      if (result.error)
        return res.status(404).json({
          error: result.error,
        });

      if (!result.accessToken) throw new Error('AccessToken is undefined');
      if (!result.refreshToken) throw new Error('RefreshToken is undefined');

      return res.json({
        data: result,
      });
    } catch (e: unknown) {
      if (!(e instanceof Error) || !(e instanceof HttpException)) {
        console.log(e);
        return;
      }

      next.exec(e);
    }
  }
}
