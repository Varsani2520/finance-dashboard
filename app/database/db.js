// db.js
import mongoose from 'mongoose';

export const connectDatabase = async () => {
  try {
    mongoose.connect("mongodb+srv://dhruv:dhruv@cluster0.lcgi7sy.mongodb.net/", {
      dbName: "finance-dashboard",
      serverSelectionTimeoutMS: 50000
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
};
