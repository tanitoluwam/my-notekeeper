import React from "react";
import "./App.css";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { NoteDetails } from "./pages/NoteDetails";
import { CreateNote } from "./components/notes/CreateNote";
import { AuthContextProvider } from "context/AuthContext/AuthContext";
import { LoadingContextProvider } from "context/LoadingContext/LoadingContext";
import { RequireAuth } from "pages/auth/RequireAuth";

function App() {
  return (
    <AuthContextProvider>
      <LoadingContextProvider>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route path="note/:id" element={<NoteDetails />} />
          <Route path="create" element={<CreateNote />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Routes>
      </LoadingContextProvider>
    </AuthContextProvider>
  );
}

export default App;
