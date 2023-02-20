import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";


import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

const Path = () => {
  const loggedIn = window.localStorage.getItem("isLoggedIn");

  return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Dashboard" element={loggedIn ? <Dashboard /> : <Login />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Path;