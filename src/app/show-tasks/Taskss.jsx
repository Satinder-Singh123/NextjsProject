import UserContext from "@/context/userContext";
import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
const Taskss = ({ task, deletetaskparent }) => {
  const { user } = useContext(UserContext);

  function deleteTask(taskId) {
    deletetaskparent(taskId);
  }

  return (
    <>
      <div className="bg-blue-400">
        <div
          className={` shadow-lg mt-2 rounded mb-4 ${
            task.status == "completed" ? "bg-blue-800" : "bg-gray-800"
          }`}
        >
          <div className="p-5">
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold">{task.title}</h1>
              <span
                onClick={() => {
                  deleteTask(task._id);
                }}
                className="shadow-lg hover:bg-gray-700 bg-gray-900 rounded-full w-9 h-9 flex justify-center items-center cursor-pointer"
              >
                <RxCross1 className="shadow-lg bg-gray-900 rounded-full " />
              </span>
            </div>
            <p className=" font-normal">
              Content: <span> {task.content}</span>
            </p>
            <p>
              Status: <span className="font-bold"> {task.status}</span>
            </p>
            <p className="text-right ">
              Author: <span className="font-semibold"> {user?.name}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Taskss;
