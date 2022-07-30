import { AuthPayload } from '@/auth';
import { TokenService } from '@/common';
import { REFRESH_KEY, SECRET_KEY } from '@/configs';
import jsonwebtoken from 'jsonwebtoken';

export class JwtService implements TokenService {
  constructor(private readonly jwt: typeof jsonwebtoken) {}

  genToken(payload: AuthPayload): string {
    if (SECRET_KEY)
      return this.jwt.sign(payload, SECRET_KEY, { expiresIn: '10m' });
    throw new Error('No secret key');
  }
  genRefreshToken(payload: AuthPayload): string {
    if (REFRESH_KEY)
      return this.jwt.sign(payload, REFRESH_KEY, { expiresIn: '2h' });
    throw new Error('No refresh key');
  }
}
