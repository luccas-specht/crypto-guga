import { Router } from 'express';

import { AsymmetricController } from '../../../controllers/AsymmetricController';

export const asymmetricRouter = Router();

const authController = new AsymmetricController();

asymmetricRouter.post('/encrypt', authController.asymmetricEncryption);
