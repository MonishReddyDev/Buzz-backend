import mongoose from "mongoose";

const url = "mongodb://localhost:27017/"

beforeAll(async () => {
    // Connect to the database
    await mongoose.connect(url);
    console.log("db connected");
});

afterAll(async () => {
    // Disconnect Mongoose
    await mongoose.connection.close();  // Call the close method
    console.log("db disconnected");
});
