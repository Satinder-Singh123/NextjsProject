"use client";
import React, { useState } from "react";
import Image from "next/image";
// import login from "../../assets/login.svg";

import { toast } from "react-toastify";
import { addTask } from "@/sevices/taskService";

const Addtasks = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "662b49f9930a6566a35241dc",
  });

  const handleAddtask = async (event) => {
    event.preventDefault();
    // console.log(task);

    try {
      const result = await addTask(task);
      console.log(result);
      toast.success("Your task is added", {
        position: "top-center",
      });
      setTask({
        title: "",
        content: "",
        status: "none",
      });
    } catch (error) {
      console.log(error);
      toast.error("You task is not added", {
        position: "top-center",
      });
    }
  };
  return (
    <div className="grid grid-cols-12 justify-center max-h-screen ">
      <div className="col-span-4 col-start-5  p-5  shadow-sm ">
        <div className="my-8 flex justify-center">
          {/* <Image
            src={login}
            style={{
              width: "50%",
            }}
            alt="login "
          /> */}
        </div>
        <h1 className="text-3xl text-center ">Add Your Task Here</h1>

        <form action="#!" onSubmit={handleAddtask}>
          {/* task title */}
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block  font-semibold text-xl mb-2 "
            >
              Title
            </label>
            <input
              name="tast_title"
              value={task.title}
              onChange={(e) =>
                setTask({
                  ...task,
                  title: e.target.value,
                })
              }
              type="text"
              className=" w-full p-3.5 rounded-md  focus:ring-gray-200 border-2 border-black  text-black"
              id="task_title"
            />
          </div>
          {/* task title */}
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block font-semibold text-xl mb-2"
            >
              Content
            </label>
            <textarea
              name="task_content"
              value={task.content}
              onChange={(e) =>
                setTask({
                  ...task,
                  content: e.target.value,
                })
              }
              type="text"
              className="w-full p-3.5 rounded-md  focus:ring-gray-200  border-2 border-black text-black"
              id="task_content"
              rows={3}
            />
          </div>
          {/* task status */}
          <div className="mt-4 ">
            <label
              htmlFor="tast-status"
              className="block font-semibold text-xl mb-2"
            >
              Status
            </label>
            <select
              name="tast_status"
              value={task.status}
              onChange={(e) =>
                setTask({
                  ...task,
                  status: e.target.value,
                })
              }
              id="task_status"
              className="w-full p-3.5 rounded-md bg-blue-500 focus:ring-gray-200 border-2 border-black "
            >
              <option value="none" disabled>
                ---Select Status---
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          {/* button */}
          <div className="mt-4 flex justify-center">
            <button className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-900">
              Add Todo
            </button>
            <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-900 ms-3">
              Clear
            </button>
          </div>
          {/* {JSON.stringify(task)} */}
        </form>
      </div>
    </div>
  );
};

export default Addtasks;
