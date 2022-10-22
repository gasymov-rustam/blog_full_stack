import { STATUS } from '../constants/statuses.js';
import jwt from 'jsonwebtoken';

export const checkAuth = (req, res, next) => {
  const key = process.env.SECRET ?? '';
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

  if (token) {
    try {
      const decoded = jwt.verify(token, key);

      req.userId = decoded._id;
      next();
    } catch (error) {
      return res.status(STATUS.FORBIDDEN).json({
        message: "You don't have permissions",
      });
    }
  } else {
    return res.status(STATUS.FORBIDDEN).json({
      message: "You don't have permissions",
    });
  }
};
