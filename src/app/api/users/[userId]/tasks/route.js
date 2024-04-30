import { geterror } from "@/helper/error";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
const {userId}= params;

try{
 const tasks= await Task.find({
    userId:userId
  })

  return NextResponse.json(tasks)
}catch(error){
console.log(error)
return geterror("Error to get tasks", 404, false)
}
}