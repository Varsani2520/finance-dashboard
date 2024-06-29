// pages/api/signup.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { connectDatabase } from '@/app/database/db';
import { signupUser } from '@/app/models/signupUser';

export async function POST(request) {
  await connectDatabase();

  const { username, password, name, address } = await request.json();

  try {
    console.log('Received user data:', { username, name, address });

    const hashedPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign({ username }, process.env.JWT_SECRET);

    const newUser = new signupUser({
      username,
      password: hashedPassword,
      name,
      address,
      token,
    });

    const result = await newUser.save();

    console.log('User saved successfully:', result);

    return NextResponse.json({
      success: true,
      message: 'User Registration Success',
      data: result,
    });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'User registration failed',
      },
      { status: 500 }
    );

  }
}