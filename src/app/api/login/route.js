import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDb } from "@/helper/db";

export async function POST(request) {
  await connectDb();
  const { email, password } = await request.json();

  try {
    const user = await User.findOne({
      email: email,
    });
    if (user == null) {
      throw new Error("User not found");
    }

    const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
      throw new Error("Passwrod not matched");
    }

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );
    //create nextreponse

    const response = NextResponse.json({
      message: "Login success",
      success: true,
      user: user,
    });
    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });

    // console.log(user);
    // console.log(token);

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
