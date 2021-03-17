import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';

import 'express-async-errors';

import { routes } from './routes';
import { AppError } from '../errors/appError';

const app = express();

app.use(express.json());

app.use(routes);

app.use(
  (error: Error, resquest: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    console.error(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
);

app.listen(3333, () => {
  console.log('Server Started in port: 3333');
});
