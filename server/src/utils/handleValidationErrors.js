import { validationResult } from 'express-validator';
import { STATUS } from '../constants/statuses.js';

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(STATUS.BAD_REQUEST).json(errors.array());
  }

  next();
};
