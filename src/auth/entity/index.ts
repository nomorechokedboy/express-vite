export interface User {
  _id: string;
  email: string;
  password: string;
  studentId: number;
}

export type LoginBody = Omit<User, '_id' | 'studentId'>;

export interface LoginData {
  accessToken?: string;
  refreshToken?: string;
  error?: string;
}
