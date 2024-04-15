const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;

mongoose.set("strictQuery", false);
const mongoURI = process.env.MONGO_URI;
const client = new MongoClient(mongoURI);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

function getDb(dbName = process.env.DB_NAME) {
  return client.db(dbName);
}

module.exports = {
  connectDB,
  getDb
};
