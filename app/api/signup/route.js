import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDatabase } from "@/app/database/db";
import { signupUser } from "@/app/models/signupUser";

connectDatabase();

export async function POST(request) {
  const { username, password, name, address } = await request.json();

  try {
    const response = new signupUser({
      username,
      password,
      name,
      address,
      token: jwt.sign({ username }, process.env.JWT_SECRET),
    });

    const result = await response.save();

    return NextResponse.json({
      success: true,
      message: "User Registration Success",
      data: result,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({
      success: false,
      message: "User registration failed",
    }, { status: 500 });
  }
}
