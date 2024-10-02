import connectDB from "./db/connect.js";
import app from "./app.js";
import { PORT } from "./env.config.js";  // Ensure this file contains the correct PORT variable

const port = PORT;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running at port:", port);
    });
  })
  .catch(() => {
    console.log("MongoDB connection failed");
  });
