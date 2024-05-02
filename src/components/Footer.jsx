"use client";
import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer className=" bg-blue-800 ">
      <div className="flex p-5 justify-around">
        <div className="text-center">
          <h1>Welcome to Task Manager</h1>
        </div>
        <div className="text-center">
          <h1>Import Links</h1>
          <ul className="flex space-x-2">
            <li>
              <Link href="#!">Facebook</Link>
            </li>
            <li>
              <Link href="#!">Instagram</Link>
            </li>
            <li>
              <Link href="#!">Watsapp</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
