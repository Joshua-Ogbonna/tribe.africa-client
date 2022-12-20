import React from "react";
import { useNavigate } from "react-router-dom";

import "./Tribes.css";

const Tribes = () => {
  const navigate = useNavigate();
  return (
    <div className="tribes__component">
      <div className="dashboard__header">
        <h3>Tribes</h3>
      </div>

      <div className="tribes">
        <div className="tribes__head flex__three">
          <h5>My Tribes</h5>
          <button
            className="button-sm flex__gap"
            onClick={() => navigate("/dashboard/tribes/create")}
          >
            <i className="fa-solid fa-plus"></i> Create Tribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tribes;
