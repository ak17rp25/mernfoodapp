const express = require('express');
const router = express.Router();

router.post('/foodData',(req,res)=>{
    try{
        console.log(global.data_item);
        res.send([global.data_item,global.data_category]);
    } catch(err){
        console.log(err);
        res.send('Server Error');
    }
})

module.exports = router;