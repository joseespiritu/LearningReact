import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import UserPage from "./pages/UserPage";
import UsersPage from "./pages/UsersPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />

        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/user/new" element={<p>New users</p>} />

        <Route path="/usuarios" element={<Navigate to="/users" />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="welcome" element={<p>Welcome</p>} />
          <Route path="goodbye" element={<p>Goodbye!</p>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        {/* Con replace te permite regresar a la pantalla anterior */}
        {/* <Route path="/usuarios" element={<Navigate replace to="/users" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
