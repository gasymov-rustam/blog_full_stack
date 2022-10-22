import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/index.js';

export const register = async (candidate) => {
  const SECRET = process.env.SECRET ?? '';

  try {
    const { password, email, fullName, avatarUrl } = candidate;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new UserModel({
      email,
      fullName,
      avatarUrl,
      password: hash,
    });

    const user = await doc.save();
    const token = jwt.sign({ _id: user._id }, SECRET, { expiresIn: '30d' });
    const { password: passwordHash, ...userData } = user._doc;

    return { ...userData, token };
  } catch (error) {
    console.log(error);
    throw new Error('can not succeed to register');
  }
};

export const login = async (candidate) => {
  const SECRET = process.env.SECRET ?? '';

  try {
    const { email, password } = candidate;
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw new Error(`user ${email} is not exist`);
    }

    const isValidPassword = await bcrypt.compare(password, user._doc.password);

    if (!isValidPassword) {
      throw new Error(`Incorrect password or email`);
    }

    const token = jwt.sign({ _id: user._id }, SECRET, { expiresIn: '30d' });
    const { password: passwordHash, ...userData } = user._doc;

    return { ...userData, token };
  } catch (error) {
    throw new Error('can not succeed to authorized');
  }
};

export const getMe = async (id) => {
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      // return res.status(STATUS.BAD_REQUEST).json({ message: `user ${id ?? ''} is not exist` });
      throw new Error({ message: `user ${id ?? ''} is not exist` });
    }

    const { password, ...userData } = user._doc;

    return userData;
  } catch (error) {
    console.log(error);
    throw new Error({ message: `user ${id ?? ''} is not exist` });
  }
};
