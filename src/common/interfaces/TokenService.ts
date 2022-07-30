import { AuthPayload } from '@/auth';

export interface TokenService {
  genToken(payload: AuthPayload): string;
  genRefreshToken(payload: AuthPayload): string;
}
