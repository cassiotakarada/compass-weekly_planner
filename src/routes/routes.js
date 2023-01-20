import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";

import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

const Path = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Path;