import express, { json, urlencoded } from 'express';
import routes from './routes/index.js';

// Import sequelize connection
import sequelize from './config/connection.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(routes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
