import jwt from 'jsonwebtoken';
import { REFRESH_KEY, SECRET_KEY } from '../../configs';

interface UserPayload {
  id: string;
}

export const genToken = (payload: UserPayload): string => {
  if (SECRET_KEY) return jwt.sign(payload, SECRET_KEY, { expiresIn: '10m' });
  throw new Error('No secret key');
};

export const genRefreshToken = (payload: UserPayload): string => {
  if (REFRESH_KEY) return jwt.sign(payload, REFRESH_KEY, { expiresIn: '2h' });
  throw new Error('No refresh key');
};
