const mongoose = require("mongoose");

async function connectTodb() {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("Connected To DB ✅");
  } catch (err) {
    console.error("DB connection failed ❌", err);
    process.exit(1);
  }
}

module.exports = connectTodb;
