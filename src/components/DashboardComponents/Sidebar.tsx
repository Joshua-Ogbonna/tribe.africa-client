import React from "react";
import { Link, useLocation } from "react-router-dom";

import Brand from "../Reusables/Brand/Brand";

const Sidebar = () => {
  const { pathname } = useLocation();
  const splitPath = pathname.split("/");
  console.log(splitPath);

  return (
    <div className="sidebar">
      <div className="top">
        <Brand />
        <hr />
      </div>
      <div className="middle">
        <ul>
          <li
            className={
              splitPath[1] === "dashboard" && !splitPath[2]
                ? "active__list"
                : ""
            }
          >
            <Link to="">
              <i className="bx bxs-dashboard"></i> Dashboard
            </Link>
            <i className="fa-solid fa-circle circle__active"></i>
          </li>
          <li>
            <Link to="">
              <i className="fa-solid fa-users"></i> Tribes
            </Link>
            <i className="fa-solid fa-circle circle__active"></i>
          </li>
          <li className={splitPath[2] === "events" ? "active__list" : ""}>
            <Link to="/dashboard/events">
              <i className="fa-solid fa-calendar-days"></i> Events
            </Link>
            <i className="fa-solid fa-circle circle__active"></i>
          </li>
          <li>
            <Link to="">
              <i className="fa-solid fa-envelopes-bulk"></i> Newsletters
            </Link>
            <i className="fa-solid fa-circle circle__active"></i>
          </li>
          <li>
            <Link to="">
              <i className="fa-solid fa-shop"></i> Store
            </Link>
            <i className="fa-solid fa-circle circle__active"></i>
          </li>
          <li>
            <Link to="">
              <i className="fa-solid fa-gear"></i> Settings
            </Link>
            <i className="fa-solid fa-circle circle__active"></i>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <hr />
        <ul>
          <li>
            <i className="fa-solid fa-right-from-bracket"></i> Sign Out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
