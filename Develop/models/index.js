// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongs to Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE' // Optional: ensures that a product is deleted if its related category is deleted
});

// Category has many Product models
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Product belongs to many Tag models through the intermediary ProductTag
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'tags', // Alias for when data is retrieved
  foreignKey: 'product_id'
});

// Tag belongs to many Product models
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'products', // Alias for when data is retrieved
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
