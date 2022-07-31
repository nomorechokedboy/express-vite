import { AuthPayload, LoginData, LoginUseCase } from '@/auth';
import { HashingFunction, TokenService } from '@/common';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { MockUserRepo } from '../userRepo.spec';

export class MockBcrypt implements HashingFunction {
  compare(_: string, _1: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}

export class MockJwt implements TokenService {
  genToken(_: AuthPayload): string {
    throw new Error('Method not implemented.');
  }
  genRefreshToken(_: AuthPayload): string {
    throw new Error('Method not implemented.');
  }
}

describe.concurrent('Test login usecase', () => {
  let mockUseCase: LoginUseCase;

  const _: LoginData = {
    accessToken: 'validAT',
    refreshToken: 'validRT',
  };
  beforeAll(() => {
    mockUseCase = new LoginUseCase(
      new MockUserRepo(),
      new MockBcrypt(),
      new MockJwt(),
    );
  });

  it('Should return error on invalid email', async () => {
    const expectedError: LoginData = {
      error: 'Wrong email',
    };

    vi.spyOn(mockUseCase, 'exec').mockImplementation(async () => expectedError);

    const res = await mockUseCase.exec({
      email: 'Non-exist email',
      password: '',
    });
    expect(res).toStrictEqual(expectedError);
    expect(1 + 2).toBe(3);
  });
});
