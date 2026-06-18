import express from 'express';
import { appById, appCreate, appDeleteById, appList, pingHandler, updateById } from '../../controllers/app.controller';
import { validateParams, validateQueryParams, validateRequestBody } from '../../validators';
import { createApplication, getAllApplication, getApplicationById, updateApplication } from '../../validators/application.validator';
import { pingSchema } from '../../validators/ping.validator';

const appRouter = express.Router();

appRouter.get('/', validateRequestBody(pingSchema), pingHandler); 

appRouter.post('/applications', validateRequestBody(createApplication), appCreate )
appRouter.get('/applications', validateQueryParams(getAllApplication), appList);
appRouter.get('/applications/:id', validateParams(getApplicationById), appById);
appRouter.delete('/applications/:id', validateParams(getApplicationById), appDeleteById);
appRouter.patch('/applications/:id', validateParams(getApplicationById),validateRequestBody(updateApplication) , updateById);


export default appRouter;