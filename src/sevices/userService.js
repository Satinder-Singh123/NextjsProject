import { httpaxios } from "@/helper/httpHelper";

export async function signUp(user) {
  try {
    const response = await httpaxios.post("/api/users", user);
    return response.data;
  } catch (error) {
    // Handle error appropriately, e.g., log it or throw a custom error
    console.error("Error during sign up:", error);
    throw error; // rethrow the error to be handled by the caller
  }
}
export async function login(loginData) {
  const result = await httpaxios
    .post("api/login", loginData)
    .then((response) => response.data);
  return result;
}

export async function currentUser() {
  const result = await httpaxios
    .get("/api/current")
    .then((response) => response.data);
  return result;
}
