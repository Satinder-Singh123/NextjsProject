import { httpaxios } from "@/helper/httpHelper";

export async function addTask(task) {
    const result= await httpaxios
    .post("/api/tasks", task)
    .then(response => response.data);
    return result;
   }
   

   export async function getTaskofuser(userId){
    const result =await httpaxios
    .get(`/api/users/${userId}/tasks`)
    .then((response)=>response.data)
    return result;
   }

   export async function deletetask(taskId){
    const result =await httpaxios
    .delete(`/api/tasks/${taskId}`)
    .then((response)=>response.data)
    return result;
   }