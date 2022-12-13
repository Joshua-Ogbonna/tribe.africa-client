import React from "react";
import { Link, useNavigate } from "react-router-dom";

import EmptyOption from "../../Reusables/EmptyOption";

import "./Events.css";

import { events } from "../../../assets/data";

const Events = () => {
  const navigate = useNavigate();
  return (
    <div className="events__page">
      <div className="dashboard__header">
        <h3>Events</h3>
      </div>
      {events.length > 0 ? (
        <div className="events">
          <div className="head flex__two">
            <h5>My Events</h5>
            <button className="button-sm" onClick={() => navigate("/dashboard/events/create-event")}>
              <i className="fa-solid fa-plus"></i> Create Event
            </button>
          </div>
          {events.map((event, idx) => (
            <Link to={`/dashboard/events/event/${idx + 1}`}>
              <div className="event flex__two shadow-sm" key={idx}>
                <div className="event__head flex__one">
                  <img
                    src={event.eventImage}
                    alt={event.eventTitle}
                    width={60}
                    height={50}
                  />
                  <div>
                    <h5>{event.eventTitle}</h5>
                    <p>{event.date}</p>
                  </div>
                </div>
                <div className="event__details flex__one">
                  <p>
                    <i className="fa-solid fa-user"></i>
                    {event.registeredAttendees}
                  </p>
                  <p>
                    <i className="fa-solid fa-users"></i>
                    {event.maxAttendees}
                  </p>
                  <p>
                    <i className="fa-solid fa-tag"></i>
                    {event.category}
                  </p>
                  <p>
                    <i className="fa-solid fa-money-bill"></i>
                    {event.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <EmptyOption
          message="You don't have any event. Click the button to create one."
          buttonText="Create Event"
          buttonAction={() => {
            navigate("/dashboard/events/create-event");
          }}
        />
      )}
    </div>
  );
};

export default Events;
