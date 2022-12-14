import React from "react";
import { Input, Table } from "reactstrap";

import { guests, images } from "../../../../../assets/data";

import "./Guests.css";

const Guests = () => {
  return (
    <div className="guests__component">
      {/* All Guests */}
      <div className="section guest__list">
        <h5>Guests List</h5>
        {/* Search for guest */}
        <Input
          type="search"
          name="searchGuest"
          placeholder="Search for a guest"
        />

        {/* Guest Table */}
        <div className="shadow-sm mt-2 p-1">
          <Table responsive borderless>
            <thead>
              <tr>
                <th>
                  <div>Name</div>
                </th>
                <th>
                  <div>Email</div>
                </th>
                <th>
                  <div>Action</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {guests.length === 0 ? (
                <div className="no__guests">No guests yet</div>
              ) : (
                guests.map((guest, idx) => <tr></tr>)
              )}
            </tbody>
          </Table>
        </div>
      </div>

      {/* Invute Guests */}
      <div className="invite__guest section">
        <h5>Invite Guests</h5>
        <div className="shadow-sm p-2 flex__three invite__section">
          <div className="form__area">
            <Input
              type="text"
              name="emails"
              placeholder="Enter or paste emails here"
            />
            <button className="mt-2">Send Invites</button>
          </div>
          <div className="referral__link">
            <h5>Share Event Link</h5>
            <p>tribe.africa/ays2sdk</p>
            {/* <hr /> */}
            <div className="socials flex__one">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-solid fa-comment"></i>
              <i className="fa-solid fa-copy"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Moderators */}
      <div className="section">
        <h5>Host & Moderators</h5>

        {/* admins */}
        <div className="admins flex__one">
          <div className="admin flex__one shadow p-2">
            <img
              src={images[Math.floor(Math.random() * images.length)]}
              alt=""
            />
            <div>
              <h5>John Obidi</h5>
              <p>Host</p>
            </div>
          </div>
          <div className="admin shadow flex__one p-2 add__admin">
            <div className="mock__image"></div>
            <div>
              <h5>Add Moderator</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guests;
