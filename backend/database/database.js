import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
// console.log(`MongoDB URI: ${process.env.MONGODB_URI}`);


// Connect to MongoDB
export const connectDB = async () => {
  try {
    // console.log('Attempting to connect to MongoDB...'); //for debugging
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

