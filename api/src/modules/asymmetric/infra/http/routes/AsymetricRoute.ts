import { Router } from 'express';

import { AsymmetricController } from '../../../controllers/AsymmetricController';

export const asymmetricRouter = Router();

const asymmetricController = new AsymmetricController();

asymmetricRouter.post('/encrypt', asymmetricController.asymmetricEncryption);
asymmetricRouter.post('/decryption', asymmetricController.symmetricDecryption);
