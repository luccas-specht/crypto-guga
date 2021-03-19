import { Router } from 'express';

import { AsymmetricController } from '../controllers/AsymmetricController';

export const asymmetricRouter = Router();

const asymmetricController = new AsymmetricController();

asymmetricRouter.post('/encrypt', asymmetricController.asymmetricEncrypt);
asymmetricRouter.post('/decryption', asymmetricController.asymmetricDecrypt);
