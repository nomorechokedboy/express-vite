import { HttpBody, HttpException } from '@/custom';
import { genRefreshToken, genToken } from '@libs';
import { NextFunction, Request, Response } from 'express';
<<<<<<< HEAD
import { userModel } from './model';
=======
import { userModel } from '.';
>>>>>>> 660454a (feat: now can login and register)
import bcrypt from 'bcrypt';

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void | Response> => {
  try {
<<<<<<< HEAD
    if (!req.user) throw new Error('Request user is null');

=======
>>>>>>> 660454a (feat: now can login and register)
    const foundUser = await userModel.findOne({ email: req.user.email });
    if (foundUser) {
      return res.status(401).json({
        error: [{ email: `Email: ${req.user.email} already existed!` }],
      });
    }

    const createdUser = await userModel.create(req.user);
    const accessToken = genToken({ id: req.user.email });
    const refreshToken = genRefreshToken({ id: req.user.email });
    res.json({
      success: true,
      data: {
        user: createdUser,
        accessToken,
        refreshToken,
      },
    });
  } catch (e) {
    console.log(e);

    next(new HttpException('Register error'));
  }
};

export const login = async (
  req: Request<unknown, unknown, HttpBody>,
  res: Response,
  next: NextFunction,
): Promise<void | Response> => {
  const { email, password } = req.body;
<<<<<<< HEAD

=======
>>>>>>> 660454a (feat: now can login and register)
  try {
    const foundUser = await userModel.findOne({ email });

    if (!foundUser) return res.status(404).json({ error: 'Wrong email' });

    const match = await bcrypt.compare(password, foundUser.password);

    if (!match) return res.status(404).json({ error: 'Wrong password' });

    return res.json({
      token: genToken({ id: email }),
      refreshToken: genRefreshToken({ id: email }),
    });
  } catch (e) {
    next(new HttpException('Login error'));
  }
};

// export const refreshToken = (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     if (req.decoded) {
//       const { id, role } = req.decoded;
//       const payload = { id, role };

//       res.json({
//         token: genToken(payload),
//         refreshToken: genRefreshToken(payload),
//       });
//     }
//   } catch (e) {
//     next(e);

//     return res.status(500).json({ error: serverError + new Date().toString() });
//   }
// };
