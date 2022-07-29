export interface TokenService {
  genToken(payload: unknown): string;
  genRefreshToken(payload: unknown): string;
}
