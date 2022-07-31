import { User } from '@/auth';
import { Repository } from '@/common';
import { beforeAll, describe, expect, it, vi } from 'vitest';

export class MockUserRepo implements Repository<User> {
  findOne<F>(_: F): Promise<User> {
    throw new Error('Method not implemented.');
  }
}

describe('Test user repo', () => {
  let mockUserRepo: MockUserRepo;

  beforeAll(() => {
    mockUserRepo = new MockUserRepo();
  });

  it('should resolve a User object on findOne method', async () => {
    const expected = {
      _id: 'testId',
      email: 'stsudentEmail',
      password: 'stuentValiP@ssword!',
      studentId: 19110073,
    };

    vi.spyOn(mockUserRepo, 'findOne').mockImplementation(async () => expected);

    const res = await mockUserRepo.findOne({ email: 'stsudentEmail' });
    expect(res).toStrictEqual(expected);
  });

  it('Should return null if there is no result matches', async () => {
    vi.spyOn(mockUserRepo, 'findOne').mockImplementation(async () => null);

    const res = await mockUserRepo.findOne({ email: 'non-exist Email' });
    expect(res).toBeNull();
  });
});
