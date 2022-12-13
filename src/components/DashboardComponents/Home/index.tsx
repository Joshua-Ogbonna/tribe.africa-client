import React from "react";

import { getGreeting } from "../../../helpers";
import EmptyOption from "../../Reusables/EmptyOption";

import "./DashboardHome.css";

const DashboardHome = () => {
  return (
    <div className="dashboard__home">
      {/* Salutation */}
      <div className="salutation__head">
        <span>Hello, Joshua 👋</span>
        <h3>Good {getGreeting()}</h3>
      </div>

      {/* Communities Stats */}
      <div className="communities section">
        <h5>Tribes</h5>
        <EmptyOption
          message="You don't belong to any tribe. You can create one"
          buttonText="Create Tribe"
          buttonAction={() => {}}
        />
      </div>

      {/* Events */}
      <div className="events section">
        <h5>Events</h5>
        <EmptyOption
          message="You don't have any event. Click the button to create one."
          buttonText="Create Event"
          buttonAction={() => {}}
        />
      </div>

      {/* Transactions */}
      <div className="transactions section">
        <h5>Transactions</h5>
      </div>
    </div>
  );
};

export default DashboardHome;
