// models/signupUser.js
import mongoose from 'mongoose';

const signupUserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Username is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  name: String,
  address: String,
  token: String,
});

export const signupUser = mongoose.models.signupUser || mongoose.model('signupUser', signupUserSchema);
