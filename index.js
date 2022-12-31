const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./Routers/userRoutes");

//middleware
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Chat server is running");
});

app.listen(port, () => {
  console.log(`Chat server is running on port ${port}`);
});

//db
mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};

connectDB().catch(err => console.log(err))


//routes

app.use('/user', userRoutes)
