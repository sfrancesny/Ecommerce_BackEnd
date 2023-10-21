import express from 'express';
import apiRoutes from './api/index.js';  

const router = express.Router();

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

export default router;
