import { Router } from 'express';

import { SymmetricalController } from '../../../controllers/SymmetricalController';
import { ensureDataRequest } from '../schemas/SymmetricalSchema';

export const symmetricalRouter = Router();

const authController = new SymmetricalController();

symmetricalRouter.post(
  '/encrypt',
  ensureDataRequest,
  authController.symmetricEncryption
);
