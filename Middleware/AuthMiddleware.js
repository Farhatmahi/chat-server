const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  //will check if there's a token 
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {

      //take the token
      token = req.headers.authorization.split(" ")[1];

      //decode
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      

      //find
      req.user = await User.findById(decoded.id).select("-password")

      next()


    } catch (err) {
      res.status(401).send({message : "Unauthorized"})

    }
  }

  if(!token){
    res.status(401).send({message : "No token found"})
  }

});

module.exports = { protect };
