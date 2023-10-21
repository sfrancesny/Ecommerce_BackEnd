import express from 'express';
import categoryRoutes from './category-routes.js';
import productRoutes from './product-routes.js';
import tagRoutes from './tag-routes.js';

const router = express.Router();

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

export default router;
