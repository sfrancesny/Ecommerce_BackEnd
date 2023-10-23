import express from 'express';
import { Category, Product } from '../../models/index.js';

const router = express.Router();

// The `/api/categories` endpoint

router.get('/', async (req, res) => { 
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({ include: [Product] });
    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => { 
  // find one category by its `id` value
  // its associated Products
  try {
    const category = await Category.findByPk(req.params.id, { include: [Product] });
    if (!category) res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  console.log(req.body); 
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update(req.body, { where: { id: req.params.id } });
    
    if (!updatedCategory[0]) {
      return res.status(404).json({ message: 'Category not found' }); // use `return` to exit the function
    }
    
    res.json({ message: 'Category updated successfully' }); // Message for successful update
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', async (req, res) => { 
  // delete a category by its `id` value
  try {
    const category = await Category.destroy({ where: { id: req.params.id } });
    if (!category) res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
