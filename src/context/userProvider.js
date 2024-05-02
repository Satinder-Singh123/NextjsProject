"use client";

import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { currentUser } from "@/sevices/userService";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function dataload() {
      try {
        const tempUser = await currentUser();
        console.log(tempUser);
        setUser({ ...tempUser });
      } catch (error) {
        console.log(error);
        // toast.error("Loding current user error");
        setUser(undefined);
      }
    }
    if (!user) dataload();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
