import { NextResponse } from "next/server";

export const geterror = (message, statusCode, successStatus) => {
  return NextResponse.json(
    {
      message: message,
      success: successStatus,
    },
    {
      status: statusCode,
    }
  );
};
