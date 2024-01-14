const express = require("express");
const loginRouter = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtSecret = "MYNAMEISAKASHKUMARSHARMAILIVEINDEHRADUN"

loginRouter.post(
  "/loginuser",
  [
    body("email", "Provide Correct EmailId").isEmail(),
    body("password", "Password Length is not proper").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ result: result.array() });
    }
    let email = req.body.email;
    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res.status(400).json({ error: "Email Id Doesnot exist" });
      }
      //for comparing crypted data
      const pwdCompare = await bcrypt.compare(req.body.password,userData.password);
      console.log(pwdCompare);
      if (!pwdCompare) {
        return res?.status(400).json({ error: "Enter Correct Password" });
      }
      const data = {
        user:{
          id: userData.id
        }
      }
      //creating authToken
      const authToken = jwt.sign(data,jwtSecret);
      return res.json({ success: true,authToken:authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = loginRouter;
