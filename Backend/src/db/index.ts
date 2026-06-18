import { Sequelize } from 'sequelize';
import { Application, initApplicationModel } from './models/index';


const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
  }
);

initApplicationModel(sequelize);

export { Application, sequelize };

