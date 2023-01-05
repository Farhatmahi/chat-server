const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const generateToken = require("../Config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, image } = req.body;
  console.log(image)

  if (!username || !email || !password) {
    res.status(400).send({ message: "Please enter all fields" });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).send({ message: "Email already exists" });
  }

  const user = await User.create({
    username,
    email,
    password,
    image
  });

  if (user) {
    const generatedToken = generateToken(user._id)
    const updateUser = await User.findOneAndUpdate(user._id, {
      token : generatedToken
    },
    { new: true } )


    res.status(200).json(updateUser);
    console.log("Data successfully saved");
  }
});

//user?search=keyword
const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { username: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  // console.log(req.user._id);
  
  res.send(users);
});





const checkExistedUser = asyncHandler(async(req, res) => {
  const users = await User.find()
  res.send(users)
})

module.exports = { allUsers, registerUser, checkExistedUser };
