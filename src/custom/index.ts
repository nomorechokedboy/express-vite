export class HttpException extends Error {
  status: number;
  message: string;
  constructor(message: string, status?: number) {
    super(message);
    this.status = status ?? 500;
    this.message = message;
  }
}

export interface HttpBody {
  email: string;
  password: string;
  studentId: number;
}
