import { describe, it, vi } from 'vitest';
import { LoginController, LoginData, LoginUseCase } from '../../../src/auth';
import { Request, Response, NextFunction } from '../../../src/common';
import { HttpBody } from '../../../src/custom';
import { MockUserRepo } from '../userRepo.spec';
import { MockBcrypt, MockJwt } from './usecase.spec';

class MockRequest implements Request {
  body: HttpBody;
}

class MockResponse implements Response {
  json<O>(body: O): Response {
    throw new Error('Method not implemented.');
  }
  status(statusCode: number): Response {
    throw new Error('Method not implemented.');
  }
}

class MockNextFunction implements NextFunction {
  exec(e: any): void {
    throw new Error('Method not implemented.');
  }
}

describe.todo('Login controller test suite', () => {
  it('Should return error response', () => {
    const controller = new LoginController(
      new LoginUseCase(new MockUserRepo(), new MockBcrypt(), new MockJwt()),
    );
    const expected: LoginData = {
      error: 'Wrong email!',
    };
    vi.spyOn(controller, 'exec').mockImplementation(async () => ({
      error: 'Wrong email!',
    }));

    const res = controller.exec(
      new MockRequest(),
      new MockResponse(),
      new MockNextFunction(),
    );
  });
});
