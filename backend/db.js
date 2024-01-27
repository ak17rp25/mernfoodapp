const mongoose = require('mongoose');

const food_Category_schema = require('../backend/models/FoodCategory');
const food_items_schema = require('../backend/models/FoodItem');


const mongodDB=async()=>{
    // mongoose.connect('mongodb+srv://system:tiger@cluster0.uw2e8da.mongodb.net/?retryWrites=true&w=majority').then((e)=>{
    await mongoose.connect('mongodb://0.0.0.0:27017/system').then(async(e)=>{

        console.log('connected to database');
        const food_itemsData = await food_items_schema.find({});
        const food_categoryData = await food_Category_schema.find({});
        //global used in node js
        global.data_item = food_itemsData;
        global.data_category = food_categoryData;
        
    }).catch((err)=>{
        console.log('failed to connected to database', err);
    });

}

module.exports = mongodDB;