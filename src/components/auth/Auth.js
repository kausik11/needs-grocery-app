import React from "react";
import { Navigate,Outlet } from "react-router-dom";

const ProtectedRoutes = ()=>{
    // const isAuthToken = window.sessionStorage.getItem("token");
    // console.log("Value of the AuthToken is",isAuthToken);
    // return isAuthToken ? <Outlet/> : <Navigate to={'/adminlogin'}/>;

    let verify = 1;
    return verify ? <Outlet/> : <Navigate to={'/adminlogin'}/>;
};

export default ProtectedRoutes;