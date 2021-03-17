import { Router } from 'express';

import { SymmetricalController } from '../../../controllers/SymmetricalController';
import { ensureDataRequest } from '../schemas/SymmetricalSchema';

export const symmetricalRouter = Router();

const authController = new SymmetricalController();

symmetricalRouter.use(ensureDataRequest);

symmetricalRouter.post('/encrypt', authController.symmetricEncryption);

symmetricalRouter.post('/decryption', authController.symmetricDecryption);
