import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Brand from "../Reusables/Brand/Brand";

const TribeSidebar = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const splitPath = pathname.split("/");

  const setActivePath = (path: string) => {
    return splitPath[3] === path ? "active__list" : "";
  };

  return (
    <div className="sidebar tribe__sidebar">
      <div className="top">
        <Brand />
        <hr />
      </div>
      <div className="middle">
        <ul>
          <li
            className={
              splitPath[2] === id && !splitPath[3] ? "active__list" : ""
            }
          >
            <Link to="">
              <i className="fa-solid fa-bars"></i>
              Overview
            </Link>
          </li>
          <li className={setActivePath("members")}>
            <Link to="">
              <i className="fa-solid fa-users"></i>
              Members
            </Link>
          </li>
          <li className={setActivePath("resources")}>
            <Link to="">
              <i className="fa-solid fa-book"></i>
              Resources
            </Link>
          </li>
          <li className={setActivePath("calendar")}>
            <Link to="">
              <i className="fa-solid fa-calendar"></i>
              Calendar
            </Link>
          </li>

          <li className={setActivePath("settings")}>
            <Link to="">
              <i className="fa-solid fa-gear"></i>
              Settings
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <hr />
        <ul>
          <li>
            <Link to="">
              <i className="fa-solid fa-right-from-bracket"></i>
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TribeSidebar;
