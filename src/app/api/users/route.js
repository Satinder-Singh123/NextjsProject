import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

//get request funciton
export async function GET(request) {
  await connectDb();
  let users = [];

  try {
    await connectDb();
    users = await User.find().select("-password");
    // console.log(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to get users",
      success: 201,
    });
  }
  return NextResponse.json(users);
}

//post request function
export async function POST(request) {
  //fetch user detail from request
  await connectDb();
  const { name, email, password, about } = await request.json();
  // console.log({ name, email, password, about });
  const user = new User({
    name,
    email,
    password,
    about,
  });
  try {
    user.password = bcrypt.hashSync(
      user.password,
      parseInt(process.env.BCRYPT_SALT)
    );
    // console.log(user);
    //save the object through database
    await connectDb();

    const createdUser = await user.save();
    // console.log(createdUser);
    const response = NextResponse.json(user, {
      status: 201,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "failed to create user !!",
        status: false,
      },
      {
        status: 500,
      }
    );
  }
}

export function PUT() {}
