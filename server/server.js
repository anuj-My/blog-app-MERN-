const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({
  path: "./config.env",
});

const app = require("./app");

//DB

const DB = process.env.MONGODB_URI.replace(
  "<PASSWORD>",
  process.env.DB_PASSWORD
);

const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log("database is connected successfully...");
  } catch (error) {
    console.log(error);
  }
};

connectDB();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server is connected to ${port}`);
});
