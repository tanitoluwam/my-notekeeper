import { http } from "../plugins/Axios";
import { toast } from "react-toastify";

export const createNote = async (payload) => {
  try {
    const { data } = await http.post("/api/notes", payload);
   toast.success("Note added successfully")
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const readNotes = async (params) => http.get("/api/notes", { params });

export const readNote = async (noteId) => http.get(`/api/notes/${noteId}`);

export const updateNote = async (noteId, payload) => {
  try {
    const { data } = await http.patch(`/api/notes/${noteId}`, payload);
    toast.success("Note edited successfully")
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const deleteNote = async (noteId) => {
  try {
    const { data } = await http.delete(`/api/notes/${noteId}`);
    toast.success("Note added successfully")
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};
