"use client";

import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
// import { httpaxios } from "@/helper/httpHelper";
import { currentUser } from "@/sevices/userService";
import { toast } from "react-toastify";

const UserProvider = ({ children }) => {

    const [user, setUser]=useState(undefined)
    useEffect(()=>{
        async function added(){
            try{
                const tempUser  = await currentUser()
                // console.log(tempUser)
                setUser({...tempUser})
               }catch(error){
                   console.log(error)
                   toast.error("Loding current user error")
                //    setUser(undefined)
               }
        }
        added()
        },[])
  return <UserContext.Provider
  value={{user, setUser}}
  >{children}</UserContext.Provider>;
};

export default UserProvider;
