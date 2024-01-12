const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const food_items_schema = new Schema({
    CategoryName: {
      type: String,
    },
    name: {
      type: String,
    },
    img: { type : String },
    options:{type : Array},
    description :{type : String}
  });

  const FoodItem = mongoose.model('food_items', food_items_schema);

  module.exports = FoodItem;