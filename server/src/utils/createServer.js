import { connectTodDb } from './connectToDb.js';
import { createMiddleware } from './createMiddleware.js';

export const createServer = (app) => {
  const PORT = process.env.API_PORT ?? 4445;

  app.listen(PORT, async (error) => {
    if (error) {
      return console.log(error);
    }

    connectTodDb();

    console.log(`🚀 server has been started on port ${PORT}`);
  });
};
