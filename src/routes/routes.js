import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";


import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Test from "../pages/Teste/Test";

const Path = () => {
  const loggedIn = window.localStorage.getItem("isLoggedIn");

  return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Registration />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Dashboard" element={loggedIn ? <Dashboard /> : <Login />} />
            <Route path="/Test" element={<Test />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Path;