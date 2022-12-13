import React from "react";
import Main from "../../components/DashboardComponents/Main";
import Sidebar from "../../components/DashboardComponents/Sidebar";

import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className="dashboard__component">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Dashboard;
