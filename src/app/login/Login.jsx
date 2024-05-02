"use client";


import UserContext from "@/context/userContext";
import { login } from "@/sevices/userService";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const context =useContext(UserContext)
  const [loginData, setLogin] = useState({
      email: "",
      password: "",
  });

  const loginformSubmitted = async (event) => {
      event.preventDefault();

      // Validate user input
      if (loginData.email.trim() === "" || loginData.password.trim() === "") {
          toast.info("Invalid Data", {
              position: "top-center"
          });
          return;
      }
    try{
   const result= await login(loginData)
  //  console.log(result)
   toast.success("Logged in",{
    position:"top-center"
  })
  context.setUser(result.user)
   router.push("/profile/user") 

    }catch(error){
      toast.error(error.response.data.message,{
        position:"top-center"
      })
    }
  }
  return (
    <div className="bg-blue-400 min-h-screen">
    <div className="grid grid-cols-12 ">
      <div className="col-span-4 col-start-5 ">
        <div className="py-5">
          <h1 className="text-center mt-7 text-2xl font-semibold">Login Here</h1>
          <form action="#!" onSubmit={loginformSubmitted}>
            {/* email */}
            <div className="mt-3">
              <label
                htmlFor="user_email"
                className="block text-xl font-bold mb-2 ps-2"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                onChange={(event) =>
                  setLogin({
                    ...loginData,
                    email: event.target.value,
                  })
                }
                value={loginData.email}
                className="w-full p-3 rounded-xl bg-gray-600 focus:ring-gray-400-100 border border-gray-600"
                placeholder="Enter Email"
              />
            </div>
            {/* Password*/}
            <div className="mt-3">
              <label
                htmlFor="user_password"
                className="block text-xl font-bold mb-2 ps-2"
              >
                Password
              </label>
              <input
                type="password"
                name="user_password"
                onChange={(event) =>
                  setLogin({
                    ...loginData,
                    password: event.target.value,
                  })
                }
                value={loginData.password}
                className="w-full p-3 rounded-xl bg-gray-600 focus:ring-gray-400-100 border border-gray-600"
                placeholder="Enter Password"
              />
            </div>
            <div className="mt-7 text-center ">
              <button
                type="submit"
                className="px-2 py-2 bg-green-600 rounded hover:bg-green-300"
              >
                Login
              </button>
              <button
                type="submit"
                className="px-2 py-2 bg-red-600 rounded ms-3 hover:bg-green-300"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* {JSON.stringify(login)} */}
    </div>
    </div>
  );
};

export default Login;
