import * as Yup from 'yup';

import { Request, Response, NextFunction } from 'express';

import { AppError } from '@shared/errors/appError';

import { messageValidation } from '@constants/messageValidation';

const schema = Yup.object().shape({
  password: Yup.string().required(messageValidation.requiredkey()),
  text: Yup.string().required(messageValidation.requiredText()),
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
