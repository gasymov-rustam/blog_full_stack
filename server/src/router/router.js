import { Router } from 'express';
import * as controllers from '../controllers/index.js';
import { checkAuth, handleValidationErrors, upload } from '../utils/index.js';
import { loginValidator, postValidator, registerValidator } from '../validations/index.js';

export const router = new Router();

router.post('/auth/login', loginValidator, handleValidationErrors, controllers.login);
router.post('/auth/register', registerValidator, handleValidationErrors, controllers.register);
router.get('/auth/me', checkAuth, controllers.getMe);

router.get('/posts', controllers.getAll);
router.get('/tags', controllers.getLastTags);
router.get('/posts/:id', controllers.getOneById);
router.post('/posts', [checkAuth, postValidator, handleValidationErrors], controllers.create);
router.patch('/posts/:id', checkAuth, controllers.update);
router.delete('/posts/:id', checkAuth, controllers.deleteById);

router.post('/uploads', checkAuth, upload.single('image'), controllers.uploads);
