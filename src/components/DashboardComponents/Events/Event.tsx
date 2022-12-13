import React from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";

import "./Events.css";

const Event = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const splitPath = pathname.split("/");

  return (
    <div className="single__event">
      <div className="event__head flex__two">
        {/* Event head should contain event main details. Title, date and invite link */}
        <div className="details">
          <h5>Night School With JO.</h5>
          <p>Wed, 14 December, 14:30</p>
        </div>
        <div className="shareable__link">
          <p>Shareable Event Link</p>
          <div className="flex__one link">
            <i className="fa-solid fa-globe"></i>
            <span>tribe.africa/ays2sdk</span>
            <i className="fa-regular fa-copy"></i>
          </div>
        </div>
      </div>

      {/* Event navigation */}
      <div className="event__navigation">
        <Link
          to=""
          className={splitPath[4] === id && !splitPath[5] ? "active__link" : ""}
        >
          <i className="fa-solid fa-users"></i> Guests
        </Link>
        <Link to={`/dashboard/events/event/${id}/details`}>
          <i className="fa-solid fa-circle-info"></i> Details
        </Link>
        {/* Remember to add delete event in settings tab */}
        <Link to={`/dashboard/events/event/${id}/settings`}>
          <i className="fa-solid fa-gear"></i> Settings
        </Link>
        <Link to={`/dashboard/events/event/${id}/emails`}>
          <i className="fa-solid fa-envelope"></i> Emails
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Event;
