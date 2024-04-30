import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware executed");
  const authToken = request.cookies.get("authToken")?.value;

  const loggedinUserNotAccessPaths =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";
if(request.nextUrl.pathname === "/api/login"){
    return;
}

  if (loggedinUserNotAccessPaths) {
    if (authToken) {
        //access not secured route
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    if (!authToken) {
        //accessing secured route
      return NextResponse.redirect(new URL("/login", request.url));
    }else{
        //varify token
    }
  }

  console.log(authToken);
  // return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/add-task",
    "/show-tasks",
    "/profile/:path*",
    "/api/:path*",
  ],
};
