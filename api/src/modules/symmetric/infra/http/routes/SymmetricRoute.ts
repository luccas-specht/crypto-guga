import { Router } from 'express';

import { SymmetricController } from '../../../controllers/SymmetricController';
import { ensureDataRequest } from '../schemas/SymmetricSchema';

export const symmetricRouter = Router();

const authController = new SymmetricController();

symmetricRouter.use(ensureDataRequest);

symmetricRouter.post('/encrypt', authController.symmetricEncryption);

symmetricRouter.post('/decryption', authController.symmetricDecryption);
