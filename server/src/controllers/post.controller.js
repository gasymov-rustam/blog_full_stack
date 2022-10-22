import { STATUS } from '../constants/statuses.js';
import * as postService from '../services/index.js';

export const getAll = async (req, res) => {
  try {
    res.status(STATUS.OK).json(await postService.getAll());
  } catch (error) {
    res.status(STATUS.SERVER_ERROR).json(error);
  }
};

export const getLastTags = async (req, res) => {
  try {
    res.status(STATUS.OK).json(await postService.getLastTags());
  } catch (error) {
    res.status(STATUS.SERVER_ERROR).json(error);
  }
};

export const getOneById = async (req, res) => {
  try {
    const post = await postService.getOneById(req.params.id);

    if (!post) {
      return res.status(STATUS.BAD_REQUEST).json({ message: `Post ${req.params.id} is not exist` });
    }

    res.status(STATUS.CREATED).json(post);
  } catch (error) {
    res.status(STATUS.SERVER_ERROR).json(error);
  }
};

export const update = async (req, res) => {
  try {
    const post = await postService.update(req.body, req.params.id);

    if (!post) {
      return res.status(STATUS.BAD_REQUEST).json({ message: `Post ${req.params.id} is not exist` });
    }

    res.status(STATUS.OK).json(post);
  } catch (error) {
    res.status(STATUS.SERVER_ERROR).json(error);
  }
};

export const deleteById = async (req, res) => {
  try {
    const post = await postService.deleteById(req.params.id);

    if (!post) {
      return res.status(STATUS.BAD_REQUEST).json({ message: `Post ${req.params.id} is not exist` });
    }

    res.status(STATUS.OK).json(post);
  } catch (error) {
    res.status(STATUS.SERVER_ERROR).json(error);
  }
};

export const create = async (req, res) => {
  try {
    const post = await postService.create(req.body, req.userId);

    if (!post) {
      return res.status(STATUS.BAD_REQUEST).json('Can not create post');
    }

    res.status(STATUS.CREATED).json(post);
  } catch (error) {
    res.status(STATUS.SERVER_ERROR).json(error);
  }
};
