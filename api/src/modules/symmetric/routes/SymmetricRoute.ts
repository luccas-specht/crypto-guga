import { Router } from 'express';

import { SymmetricController } from '../controllers/SymmetricController';

export const symmetricRouter = Router();

const authController = new SymmetricController();

symmetricRouter.post('/encrypt', authController.symmetricEncryption);
symmetricRouter.post('/decryption', authController.symmetricDecryption);
