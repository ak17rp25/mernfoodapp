const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const food_category_schema = new Schema({
    CategoryName: {
      type: String
    }
  });

  const FoodCategory =  mongoose.model('foodCategory', food_category_schema);

  module.exports = FoodCategory;