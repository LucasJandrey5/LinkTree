import React from "react";

import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import PasswordRecover from "../pages/passwordRecover";
import Profile from "../pages/dashboard/Profile";
import DashboardHome from "../pages/dashboard/DashboardHome";
import DashboardHeader from "../Components/DashboardHeader";
import ShowPages from "../pages/dashboard/ShowPages";
import EditPage from "../pages/dashboard/EditPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

const Routering = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="recover" element={<PasswordRecover />} />
        <Route path="dashboard" element={<DashboardHeader />}>
          <Route path="" element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="pages" element={<ShowPages />} />
          <Route path="page/:pageId" element={<EditPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routering;
