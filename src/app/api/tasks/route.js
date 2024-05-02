import { geterror } from "@/helper/error";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDb } from "@/helper/db";

//get all the tasks
export async function GET(request) {
  try {
    await connectDb();
    // Fetch tasks as plain JavaScript objects
    const tasks = await Task.find().lean();
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return geterror("error in getting data", 404, false);
  }
}

export async function POST(request) {
  const { title, content, userId, status } = await request.json();
  //fecthing logged in user id
  const authToken = request.cookies.get("authToken")?.value;
  //console.log(authToken)

  const data = jwt.verify(authToken, process.env.JWT_KEY);
  console.log(data._id);

  try {
    const task = new Task({
      title,
      content,
      userId: data._id,
      status,
    });
    await connectDb();
    const createdTask = await task.save();
    return NextResponse.json(createdTask, {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to create task",
      success: false,
    });
  }
}
