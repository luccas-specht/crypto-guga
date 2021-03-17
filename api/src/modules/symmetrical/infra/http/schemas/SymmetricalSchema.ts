import * as Yup from 'yup';

import { Request, Response, NextFunction } from 'express';

import { AppError } from '@shared/errors/appError';

const schema = Yup.object().shape({
  key: Yup.string().required('Envia a key pública ai'),
  text: Yup.string().required('Deve ser inserido um texto'),
});

export async function ensureDataRequest(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const { key, text } = request.body;

  try {
    await schema.validate(
      { key, text },
      {
        abortEarly: false,
      }
    );
    return next();
  } catch (err) {
    throw new AppError(`${err.errors}`);
  }
}
