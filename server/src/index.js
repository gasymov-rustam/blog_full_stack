import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { createMiddleware } from './utils/createMiddleware.js';
import { createServer } from './utils/index.js';

const app = express();

createMiddleware(app);
createServer(app);
