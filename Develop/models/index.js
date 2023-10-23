import Product from './Product.js';
import Category from './Category.js';
import Tag from './Tag.js';
import ProductTag from './ProductTag.js';

// Product belongs to Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE' // ensures that a product is deleted if its related category is deleted
});

// Category has many Product models
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE' // ensures that products are deleted if their related category is deleted
});

// Product belongs to many Tag models through the intermediary ProductTag
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
    onDelete: 'CASCADE'
  },
  as: 'tags', // Alias for when data is retrieved
  foreignKey: 'product_id'
});

// Tag belongs to many Product models
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
    onDelete: 'CASCADE'
  },
  as: 'products', // Alias for when data is retrieved
  foreignKey: 'tag_id'
});

export { Product, Category, Tag, ProductTag };
