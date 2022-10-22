import { body } from 'express-validator';

export const registerValidator = [
  body('email', 'Not correct email').isEmail(),
  body('password', 'Password should be more than 3 symbols').isLength({ min: 3 }),
  body('fullName', 'Name should be more than 3 symbols').isLength({ min: 3 }),
  body('avatarUrl', 'Not correct Url').optional().isURL(),
];

export const loginValidator = [
  body('email', 'Not correct email').isEmail(),
  body('password', 'Password should be more than 3 symbols').isLength({ min: 3 }),
];
