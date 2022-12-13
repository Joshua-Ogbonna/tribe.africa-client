import React from "react";
import { Input, Table } from "reactstrap";

import { guests } from "../../../../../assets/data";

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

      {/* Moderators */}
    </div>
  );
};

export default Guests;
