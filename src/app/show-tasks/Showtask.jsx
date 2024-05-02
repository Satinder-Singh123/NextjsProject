"use client";
import UserContext from "@/context/userContext";
import { deletetask, getTaskofuser } from "@/sevices/taskService";
import React, { useContext, useEffect, useState } from "react";
import Taskss from "./Taskss";
import { toast } from "react-toastify";

const Showtask = () => {
  const [tasks, setTasks] = useState([]);
  const context = useContext(UserContext);

  async function loadtasks(userId) {
    try {
      const tasks = await getTaskofuser(userId);
      setTasks([...tasks].reverse());
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (context.user) {
      loadtasks(context.user._id);
    }
  }, [context.user]);

  async function deletetaskparent(taskId) {
    try {
      const result = await deletetask(taskId);
      toast.success("You task is deleted");
      console.log(result);
      const newTasks = tasks.filter((item) => item._id != taskId);
      setTasks(newTasks);
    } catch (error) {
      console.log(error);
      toast.error("Error in deleting task");
    }
  }

  return (
    <div className="bg-blue-400">
      <div className="min-h-screen grid grid-cols-12 ">
        <div className="col-span-6 col-start-4 mt-7">
          <h1 className="text-2xl font-bold text-black"> Your Task ({tasks.length})</h1>

          {tasks.map((task) => (
            <Taskss
              task={task}
              key={task._id}
              deletetaskparent={deletetaskparent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showtask;
