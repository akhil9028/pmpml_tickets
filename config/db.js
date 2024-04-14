const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient; //changed now

mongoose.set("strictQuery", false);
const mongoURI = process.env.MONGO_URI; //changed now
const client = new MongoClient(mongoURI); //changed now
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
function getDb(dbName = process.env.DB_NAME) {
  return client.db(dbName);
}

module.exports = connectDB;
module.exports = getDb;
