import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Layouts/Header";

function OutletConnection() {
  return (
 
      <div className="body-content body-bg-black">
        <Header/>
        <Outlet />
      </div>

  );
}

export default OutletConnection;
