import path from 'path';
import express from 'express';
import cors from 'cors';
import { router } from '../router/index.js';
import { fileURLToPath } from 'url';

export const createMiddleware = (app) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  app.use(express.json());
  app.use(cors());
  app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
  app.use('/', router);
};
