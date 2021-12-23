const mongoose = require("mongoose");

const URI = process.env.MONGOO_URI;

async function connectDB() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connect successfully!!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = { connectDB };
