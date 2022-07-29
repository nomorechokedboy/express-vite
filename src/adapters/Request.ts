import { Request } from '@/common';
import { HttpBody } from '@/custom';
import express from 'express';

export class ExpressRequest implements Request {
  public readonly body: HttpBody;
  constructor(private readonly req: express.Request) {
    this.body = this.req.body;
  }
}
