import { Router } from 'express';

import { symmetricRouter } from '@modules/symmetric/infra/http/routes/SymmetricRoute';
import { asymmetricRouter } from '@modules/asymmetric/infra/http/routes/AsymetricRoute';

export const routes = Router();

routes.use('/symmetric', symmetricRouter);
routes.use('/asymmetric', asymmetricRouter);
