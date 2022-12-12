const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dbConnect = async () => {
  try {
    await mongoose.connect(
      process.env.DB_MONGODB_URI,
      console.log("MongoDB connected successfully")
    );
  } catch (error) {
    console.log(`DB ERR: ${error.message}`);
  }
};

module.exports = dbConnect;
