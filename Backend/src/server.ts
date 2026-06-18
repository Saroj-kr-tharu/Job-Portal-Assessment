import express from 'express';
import { serverConfig } from './config';
import logger from './config/logger.config';
import { sequelize } from './db';
import { appErrorHandler, genericErrorHandler } from './middlewares/error.middleware';
import v1Router from './routers/v1/index.router';
const app = express();

app.use(express.json());



app.use('/api/v1', v1Router);




app.use(appErrorHandler);
app.use(genericErrorHandler);


app.listen(serverConfig.PORT, async () => {
        await sequelize.authenticate();
        logger.info(' Database connected');

        await sequelize.sync({ alter: true }); 
        logger.info(' Database synced');

    logger.info(`Server is running on http://localhost:${serverConfig.PORT}`);
    logger.info(`Press Ctrl+C to stop the server.`);
});
