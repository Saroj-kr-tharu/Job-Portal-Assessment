import express from 'express';
import applicationRouter from './application.router';

const v1Router = express.Router();

v1Router.use('/',  applicationRouter);

export default v1Router;