import { http } from "../plugins/Axios";
import { toast } from "react-toastify";

export const loginUser = async (payload) => {
  try {
    const { data } = await http.post("/api/auth/login", payload);
    http.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    localStorage.setItem("token", data.token);
    toast.success("You are logged in");
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const registerUser = async (payload) => {
  try {
    const { data } = await http.post("/api/auth/register", payload);
    toast.success("Registeration successful");
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const logoutUser = async (payload) => {
  try {
    const { data } = await http.post("/api/auth/logout", payload);
    localStorage.removeItem("token");
    delete http.defaults.headers.common["Authorization"];
    toast.success("You are logged out");
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const readUserProfile = async () => http.get("/api/users/me");
