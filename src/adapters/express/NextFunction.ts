import { NextFunction } from '@/common';
import { HttpException } from '@/custom';
import express from 'express';

export class ExpressNext implements NextFunction {
  constructor(private readonly next: express.NextFunction) {}

  public exec(e?: Error | HttpException): void {
    this.next(e);
  }
}
