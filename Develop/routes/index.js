import express from 'express';
import apiRoutes from './api/index.js';  

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the Fantastic Umbrella API!</h1>
    <p>Available routes:</p>
    <ul>
      <li><a href="/api/products">Products</a></li>
      <li><a href="/api/categories">Categories</a></li>
      <li><a href="/api/tags">Tags</a></li>
    </ul>
  `);
});

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
  res.send('Welcome to the Fantastic Umbrella API!');
});

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

export default router;
