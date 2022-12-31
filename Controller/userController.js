const asyncHandler = require('express-async-handler');
const User = require('../Models/userModel');
const generateToken = require('../Config/generateToken');

const allUser = asyncHandler(async(req, res) => {
    const users = await User.find()
    res.status(200).send(users)
})

const registerUser = asyncHandler(async(req, res) => {
    const {username, email, password, image} = req.body;

    if(!username || !email || !password){
        res.status(400).send({message : "Please enter all fields"})
        
    }

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400).send({message : "Email already exists"})
    }

    const user = await User.create({
        username, email, password, image
    })

    if(user){
        res.status(200).json({
            _id : user._id,
            username : user.username,
            email : user.email,
            image : user.image,
            token : generateToken(user._id)
        })
        console.log("Data successfully saved");
    }
})



module.exports = {allUser, registerUser}