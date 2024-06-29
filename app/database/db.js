import mongoose from "mongoose";

export const connectDatabase = () => {
  try {
    mongoose.connect("mongodb+srv://partners2520:partners2520@cluster0.ehddzbb.mongodb.net/" ,{
      dbName: "finance-dashboard",
    });
    console.log("database connected successfully");
  } catch (error) {
    console.log("not connect database");
    console.log(error);
  }
};