import { STATUS } from '../constants/statuses.js';
import * as userService from '../services/index.js';

export const register = async (req, res) => {
  try {
    const user = await userService.register(req.body);

    res.status(STATUS.CREATED).json(user);
  } catch (error) {
    console.log(error);
    res.status(STATUS.SERVER_ERROR).json(error);
  }
};

export const login = async (req, res) => {
  try {
    const user = await userService.login(req.body);

    if (!user) {
      return res.status(STATUS.BAD_REQUEST).json({ message: `user ${email} is not exist` });
    }

    res.status(STATUS.OK).json(user);
  } catch (error) {
    console.log(error);
    res.status(STATUS.SERVER_ERROR).json(error);
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await userService.getMe(req.userId);

    if (!user) {
      return res
        .status(STATUS.BAD_REQUEST)
        .json({ message: `user ${req.userId ?? ''} is not exist` });
    }

    res.status(STATUS.OK).json({ user });
  } catch (error) {
    return res.status(STATUS.SERVER_ERROR).json(error);
  }
};
