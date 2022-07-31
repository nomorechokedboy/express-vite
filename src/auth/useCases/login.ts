import { HashingFunction, Repository, TokenService } from '@/common';
import { UseCase } from '@/common/interfaces/UseCase';
import { LoginBody, LoginData, User } from '../entity';

export class LoginUseCase
  implements UseCase<LoginBody, LoginData | { error: string }>
{
  constructor(
    private readonly userRepo: Repository<User>,
    private readonly encryptService: HashingFunction,
    private readonly jwt: TokenService,
  ) {}

  public async exec(data: LoginBody): Promise<LoginData> {
    try {
      const foundUser = await this.userRepo.findOne({ email: data.email });
      if (!foundUser) return { error: 'Wrong email' };

      const match: boolean = await this.encryptService.compare(
        data.password,
        foundUser.password,
      );
      if (!match) return { error: 'Wrong password' };

      return {
        accessToken: this.jwt.genToken({ id: foundUser.email }),
        refreshToken: this.jwt.genRefreshToken({ id: foundUser.email }),
      };
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
