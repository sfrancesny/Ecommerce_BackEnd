import express from 'express';
import { Product, Category, Tag, ProductTag } from '../../models/index.js'; 

const router = express.Router();

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        Category,
        {
          model: Tag,
          through: ProductTag
        }
      ]
    }); 
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// get one product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [
        Category,
        {
          model: Tag,
          through: ProductTag
        }
      ]
    });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// create new product
router.post('/', async (req, res) => {
  try {
      const productData = await Product.create(req.body);

      if (req.body.tagIds && req.body.tagIds.length) {
          const productTagIdArr = req.body.tagIds.map((tag_id) => {
              return {
                  product_id: productData.id,
                  tag_id,
              };
          });
          const productTagData = await ProductTag.bulkCreate(productTagIdArr);
          res.status(200).json(productTagData);
      } else {
          res.status(200).json(productData);
      }
  } catch (err) {
      console.log(err);
      res.status(400).json(err);
  }
});

// update product
router.put('/:id', async (req, res) => {
  // update product data
  try {
    await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    
    if (req.body.tagIds && req.body.tagIds.length) {
      const productTags = await ProductTag.findAll({ where: { product_id: req.params.id } });
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      const newProductTags = req.body.tagIds.filter((tag_id) => !productTagIds.includes(tag_id)).map((tag_id) => {
        return {
          product_id: req.params.id,
          tag_id,
        };
      });
      const productTagsToRemove = productTags.filter(({ tag_id }) => !req.body.tagIds.includes(tag_id)).map(({ id }) => id);

      await Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    }
    res.json({ message: 'Product updated successfully' });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try {
    const product = await Product.destroy({ where: { id: req.params.id } });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;