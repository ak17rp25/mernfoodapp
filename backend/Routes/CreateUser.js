const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');


router.post("/createUser",[
body('email','Provide Correct EmailId').isEmail(),
body('username').isLength({min:5}),
body('password','Password Length is not proper').isLength({min:8})],
async (req,res)=>{
    const result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).json({result:result.array()})
    }
    try{
        await User.create({
            username : req.body.username,
            password : req.body.password,
            email : req.body.email,
            location : req.body.location
        }).then(()=>{
            res.json({success : true})
        })
    } catch(error){
        console.log(error);
        res.json({success : false})
    }
});

module.exports = router;