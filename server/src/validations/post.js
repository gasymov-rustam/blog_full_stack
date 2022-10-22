import { body } from 'express-validator';

export const postValidator = [
  body('title', 'Enter title of post').isString(),
  body('text', 'Enter text for your post').isLength({ min: 3 }).isString(),
  body('tags', 'Incorrect format of tags(should be array)').optional().isArray(),
  body('imageUrl', 'Not correct Url for image').optional().isString(),
];
