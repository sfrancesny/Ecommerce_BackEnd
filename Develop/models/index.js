// import models
import Product, { belongsTo, belongsToMany } from './Product';
import Category, { hasMany } from './Category';
import Tag, { belongsToMany as _belongsToMany } from './Tag';
import ProductTag from './ProductTag';

// Product belongs to Category
belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE' //  ensures that a product is deleted if its related category is deleted
});

// Category has many Product models
hasMany(Product, {
  foreignKey: 'category_id'
});

// Product belongs to many Tag models through the intermediary ProductTag
belongsToMany(Tag, {
  through: ProductTag,
  as: 'tags', // Alias for when data is retrieved
  foreignKey: 'product_id'
});

// Tag belongs to many Product models
_belongsToMany(Product, {
  through: ProductTag,
  as: 'products', // Alias for when data is retrieved
  foreignKey: 'tag_id'
});

export default {
  Product,
  Category,
  Tag,
  ProductTag,
};
