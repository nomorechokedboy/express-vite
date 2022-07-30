import { HashingFunction } from '@/common';
import bcryptLib from 'bcrypt';

export class Bcrypt implements HashingFunction {
  constructor(private readonly bcrypt: typeof bcryptLib) {}

  compare(data: string, encrypted: string): Promise<boolean> {
    return this.bcrypt.compare(data, encrypted);
  }
}
