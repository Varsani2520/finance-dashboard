import mongoose from 'mongoose';

export const connectDatabase = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      dbName: "finance-dashboard",
      serverSelectionTimeoutMS: 50000
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
};
