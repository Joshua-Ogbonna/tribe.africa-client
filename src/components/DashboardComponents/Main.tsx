import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="main__outlet">
      <Outlet />
    </div>
  );
};

export default Main;
