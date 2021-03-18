import { Router } from 'express';

import { symmetricRouter } from '@modules/symmetric/routes/SymmetricRoute';
import { asymmetricRouter } from '@modules/asymmetric/routes/AsymetricRoute';

export const routes = Router();

routes.use('/symmetric', symmetricRouter);
routes.use('/asymmetric', asymmetricRouter);
