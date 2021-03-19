import { Router } from 'express';

import { SymmetricController } from '../controllers/SymmetricController';

export const symmetricRouter = Router();

const authController = new SymmetricController();

symmetricRouter.post('/encrypt', authController.symmetricEncrypt);
symmetricRouter.post('/decryption', authController.symmetricDecrypt);
