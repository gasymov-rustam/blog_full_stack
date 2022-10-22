import { STATUS } from '../constants/statuses.js';

export const uploads = async (req, res) => {
  try {
    res.status(STATUS.OK).json({ url: `/uploads/${req.file.originalname}` });
  } catch (error) {
    res.status(STATUS.SERVER_ERROR).json(error);
  }
};
