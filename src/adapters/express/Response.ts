import { Response } from '@/common';
import express from 'express';

export class ExpressResponse implements Response {
  constructor(private readonly res: express.Response) {}
  json<O>(body: O): Response {
    this.res.json(body);
    return this;
  }
  status(statusCode: number): Response {
    this.res.status(statusCode);
    return this;
  }
}
