import { Router } from 'express';

import { symmetricalRouter } from '@modules/symmetrical/infra/http/routes/SymmetricalRoute';

export const routes = Router();

/* symmetrical here: */
routes.use('/symmetrical', symmetricalRouter);
