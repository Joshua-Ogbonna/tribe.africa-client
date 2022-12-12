import React, { useState } from "react";
import Navbar from "../../Navbar";

import Image1 from "../../../assets/images/image-1.avif";
import Image2 from "../../../assets/images/image-2.avif";
import Image3 from "../../../assets/images/image-3.avif";
import Image4 from "../../../assets/images/image-4.avif";
import Image5 from "../../../assets/images/image-5.avif";

import "./Events.css";
import { Input } from "reactstrap";

const images = [Image1, Image2, Image3, Image4, Image5];

type IType = "physical" | "virtual";
type IAccess = "free" | "paid";

const CreateEvents = () => {
  const [coverImage, setCoverImage] = useState(
    images[Math.floor(Math.random() * images.length)]
  );
  const [type, setType] = useState<IType>();
  const [access, setAccess] = useState<IAccess>();

  return (
    <div className="create__events">
      <Navbar />

      {/* Create Event Container */}
      <div className="create__event">
        {/* Event Image
            Have default images for events should user not specify image
        */}
        <div className="cover__image">
          <img src={coverImage} alt="Cover Logo" />
          <div className="flex__one">
            <i className="bx bx-image-alt"></i> Change Cover Image
          </div>
        </div>

        {/* Event Details */}
        <div className="event__details">
          <div className="form__area">
            <label htmlFor="eventName">Event Name</label>
            <Input
              type="text"
              placeholder="Mid-night Review"
              className="event__name"
            />
          </div>
          <div className="form__area">
            <label htmlFor="eventType">Event Type</label>
            <Input
              type="select"
              value={type}
              onChange={(e) => setType(e.target.value as IType)}
            >
              <option value="default" selected hidden>
                Select Event Type
              </option>
              <option value="physical">Physical Event</option>
              <option value="virtual">Virtual Event</option>
            </Input>
          </div>
          {type === "virtual" ? (
            <div className="form__area">
              <label htmlFor="eventLink">Event Link</label>
              <Input type="url" placeholder="Event Link" />
            </div>
          ) : null}
          {type === "physical" ? (
            <div className="form__area">
              <label htmlFor="eventLocation">Event Location</label>
              <Input type="text" placeholder="Detailed address of event" />
            </div>
          ) : null}
          <div className="form__area">
            <label htmlFor="eventCategory">Access Type</label>
            <Input
              type="select"
              value={access}
              onChange={(e) => setAccess(e.target.value as IAccess)}
            >
              <option selected hidden>
                Select Event Access Type
              </option>
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </Input>
          </div>
          {access === "paid" ? (
            <div className="form__area">
              <label htmlFor="eventPrice">Event Price</label>
              <Input type="number" name="eventPrice" />
            </div>
          ) : null}
          <div className="form__area">
            <label htmlFor="eventDate">Event Date</label>
            <Input type="datetime-local" name="eventDate" />
          </div>
          <div className="form__area">
            <button>Create Event</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvents;
