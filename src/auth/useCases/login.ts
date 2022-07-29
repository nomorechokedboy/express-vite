import bcrypt from 'bcrypt';
import { Repository } from '@/common';
import { UseCase } from '@/common/interfaces/UseCase';
import { genToken, genRefreshToken } from '@libs';
import { LoginBody, LoginData } from '../entity';
import { User } from '../entity';

export class LoginUseCase
  implements UseCase<LoginBody, LoginData | { error: string }>
{
  constructor(
    private readonly userRepo: Repository<User>,
    private readonly encryptService: typeof bcrypt,
    private readonly _: unknown,
  ) {}
  public async exec(data: LoginBody): Promise<LoginData> {
    const foundUser = await this.userRepo.findOne({ email: data.email });
    if (!foundUser) return { error: 'Wrong email' };

    const match: boolean = await this.encryptService.compare(
      data.password,
      foundUser.password,
    );
    if (!match) return { error: 'Wrong password' };

    return {
      accessToken: genToken({ id: foundUser.email }),
      refreshToken: genRefreshToken({ id: foundUser.email }),
    };
  }
}
