const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const food_categories_schema = new Schema({
    CategoryName: {
      type: String,
    }
  });

  const FoodCategory = mongoose.model('item_categories', food_categories_schema);

  module.exports = FoodCategory;