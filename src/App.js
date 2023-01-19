import React, { Fragment } from "react";
// import { Route } from "react-router-dom";

import Registration from "./pages/Registration/Registration";
// import Login from "./pages/login/Login";
// import Dashboard from "./pages/dashboard/Dashboard";


import '../src/pages/Registration/Registration.modules.css';

const App = () => {
    return (
        <>
            <Registration />
            {/* <Route exact path="/" component={Registration} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Dashboard" component={Dashboard} /> */}
        </>
    );
};

export default App;