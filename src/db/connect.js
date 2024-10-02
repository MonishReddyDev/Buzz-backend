import mongoose from "mongoose";


// const mongoURI = 'mongodb://db_admin_RW2:mongoDBMB2@localhost:27018/myDatabase';

const mongoURI = "mongodb://localhost:27017/profileDb"


const connectDB = async () => {
  try {
    console.log('Attempting to connect to MongoDB at:', mongoURI);
    const connectionInstance = await mongoose.connect(mongoURI);
    console.log(`\nMongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Mongodb connection Failed:", error);

  }
};

export default connectDB;
