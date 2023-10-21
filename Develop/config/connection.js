import { config } from 'dotenv';
config();

import Sequelize from 'sequelize';

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      logging: console.log, 
      dialectOptions: {
        decimalNumbers: true,
      },
    });

export default sequelize;
