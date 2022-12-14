import React from "react";
import { Switch } from "antd";

import "./Settings.css";

const Settings: React.FC = () => {
  return (
    <div className="settings__component">
      <div className="section">
        {/* <h5>Event Access</h5> */}

        <div className="access__levels">
          {/* Registration */}
          <div className="access__type display__guest shadow">
            <div className="head flex__one">
              <i className="fa-solid fa-users"></i>
              <div>Display Guests</div>
            </div>
            <div className="mid flex__three">
              <p>Display Guest List</p>
              <Switch />
            </div>
            <div className="body">
              Turn on guest list to show list of approved guests for your
              events.
            </div>
          </div>

          {/* Registration setting */}
          <div className="access__type registration shadow">
            <div className="head flex__one">
              <i className="fa-solid fa-user-plus"></i>
              <div>Registration</div>
            </div>
            <div className="mid flex__three">
              <p>Access Registration</p>
              <Switch defaultChecked />
            </div>
            <div className="body">
              Currently accepting registrations. Turn this off to prevent new
              guests from registering for the event.
            </div>
          </div>

          {/* Event Capacity */}
          <div className="access__type event__capacity shadow">
            <div className="head flex__one">
              <i className="fa-solid fa-maximize"></i>
              <div>Event Capacity</div>
            </div>
            <div className="mid flex__three">
              <p>Manage Event Capacity</p>
              <Switch />
            </div>
            <div className="body">
              Set a cap to your event. You can set your event to accept
              unlimited number of guests.
            </div>
          </div>

          {/* Cancel Event */}
          <div className="access__type cancel__event shadow">
            <div className="head flex__one">
              <i className="fa-solid fa-ban"></i>
              <div>Cancel Event</div>
            </div>
            <div className="mid flex__three">
              <p>Cancel Your Event</p>
            </div>
            <div className="body">
              Permanently cancel this event. This operation cannot be undone. If
              there are any registered guests, we will notify them that the
              event has been canceled.
            </div>
            <button className="cancel__button">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
