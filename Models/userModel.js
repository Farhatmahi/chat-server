const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: {
      type: String,
      default: "https://img.icons8.com/fluency/96/000000/user-male-circle.png",
    },
    token: { type: String},
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
