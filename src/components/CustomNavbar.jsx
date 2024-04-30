"use client";

import Link from 'next/link';
import React from 'react';

const CustomeNavbar = () => {
// const context=useContext(UserContext)
// console.log(context)
  return (
    <nav className='bg-blue-500 h-14 py-2 px-3 
    flex justify-between items-center'>
    <div className='brand text-2xl font-semibold'>
     <h1><a href= "#!">Work Manager</a></h1>
    </div>
    <div>
     <ul className='flex space-x-4 text-xl font-semibold'>
        <li className='hover:text-blue-900'>
            <Link href={"/"}>Home</Link>
        </li>
        <li className='hover:text-blue-900' >
        <Link href='/add-task'>Add Task</Link>
        </li>
        <li className='hover:text-blue-900'>
         <Link href={'/show-tasks'}>Show Task</Link>
        </li>
     </ul>
    </div>
    <div>
    <ul className='flex space-x-4 text-xl font-semibold'>
        <li>
            <a href='/login'>Login</a>
        </li>
        <li>
            <Link href='/signup'>Signup</Link>
        </li>
    </ul>
    </div>
    </nav>
  );
}

export default CustomeNavbar;

