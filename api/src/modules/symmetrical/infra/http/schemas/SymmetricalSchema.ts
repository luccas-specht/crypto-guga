import * as Yup from 'yup';

import { Request, Response, NextFunction } from 'express';

import { AppError } from '@shared/errors/appError';

const schema = Yup.object().shape({
  password: Yup.string().required('Envia a password pública ai'),
  text: Yup.string().required('Deve ser inserido um texto'),
});

export async function ensureDataRequest(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const { password, text } = request.body;

  try {
    await schema.validate(
      { password, text },
      {
        abortEarly: false,
      }
    );
    return next();
  } catch (err) {
    throw new AppError(`${err.errors}`);
  }
}
