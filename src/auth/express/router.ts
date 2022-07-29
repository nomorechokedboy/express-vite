// import { ExpressHandler } from '@/adapters/ExpressHandler';
// import { MongoRepo } from '@/common/MongoRepo';
// import { Router } from 'express';
// import { LoginController } from '../adapter/LoginController';
// import { LoginUseCase } from '../useCases/login';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import { userModel } from '..';

// const authRoute = Router();

// authRoute.post(
//   '/login',
//   ExpressHandler(
//     new LoginController(
//       new LoginUseCase(new MongoRepo(userModel), bcrypt, jwt),
//     ),
//   ),
// );
