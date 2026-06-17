import express from 'express';
import { pingHandler } from '../../controllers/app.controller';
import { validateRequestBody } from '../../validators';
import { pingSchema } from '../../validators/ping.validator';

const appRouter = express.Router();

appRouter.get('/', validateRequestBody(pingSchema), pingHandler); 

appRouter.post('/applications', validateRequestBody(pingSchema), pingHandler )

export default appRouter;