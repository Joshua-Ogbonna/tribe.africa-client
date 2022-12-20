import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "reactstrap";

import "./Tribes.css";

type Options = "Open" | "Application" | "Invite";
interface Question {
  question: string;
  required: boolean;
}
type AccessLevel = "free" | "paid";

const CreateTribe = () => {
  const [options, setOptions] = useState<Options>();
  const [questions, setQuestions] = useState<Question[]>([
    { question: "", required: false },
  ]);
  const [accessLevel, setAccessLevel] = useState<AccessLevel>("free");

  const questionsRef = useRef<HTMLDivElement | null>(null)

  const navigate = useNavigate();

  const handleSetOptions = (option: Options) => {
    setOptions(option);
  };

  const handleFormOnChange =
    (id: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuestions(
        questions.map((question, idx) => {
          if (idx === id) {
            return {
              ...question,
              question: e.target.value,
              required: question.required,
            };
          } else {
            return question;
          }
        })
      );
    };

  const handleCheckBox =
    (id: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuestions(
        questions.map((question, idx) => {
          if (idx === id) {
            return {
              ...question,
              question: question.question,
              required: e.target.checked,
            };
          } else {
            return question;
          }
        })
      );
    };

  const handleDeleteQuestion = (id: number) => {
    if (questions.length === 1) {
      return alert("You must have atleast one question.");
    }

    if (id === 0) {
      let slicedQuestions = questions.slice(1);
      return setQuestions(slicedQuestions);
    }
    let slicedQuestions = questions.slice(id);
    return setQuestions(slicedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: "", required: false }]);
  };

  const setOptionClass = (option: Options) => {
    if (options === option) {
      return `active ${option.toLowerCase()} option`;
    } else {
      return `option`;
    }
  };

  return (
    <div className="create__tribe">
      <div className="dashboard__header flex__three">
        <h3>Create Tribe</h3>
        <i
          className="fa-solid fa-xmark"
          onClick={() => navigate("/dashboard/tribes")}
        ></i>
      </div>
      <hr />

      {/* Tribe Basic Information */}
      <div className="tribe__info">
        <div className="basic__information section">
          <h5>Basic Information</h5>
          <div className="logo flex__one">
            <div className="logo__area">
              <i className="fa-solid fa-image"></i>
              <h5>Click to upload your tribe logo</h5>
            </div>
            <input type="file" style={{ display: "none" }} />
          </div>
          <div className="details">
            <div className="form__area">
              <label htmlFor="tribe__name">Tribe Name</label>
              <Input type="text" name="tribe__name" placeholder="Tribe Name" />
            </div>
            <div className="form__area">
              <label htmlFor="tribe__description">Tribe Description</label>
              <Input type="textarea" placeholder="Tribe Description" />
            </div>
          </div>
        </div>
        <hr />

        {/* Section for access levels */}
        <div className="section">
          <h5>Tribe Access</h5>
          <p>Choose how users join your tribe</p>

          <div className="options flex__two">
            {/* Open */}
            <div
              className={setOptionClass("Open")}
              onClick={() => handleSetOptions("Open")}
            >
              <i className="fa-solid fa-globe"></i>
              <h6>Open</h6>
              <p>Anyone with tribe link can join.</p>
            </div>

            {/* Application */}
            <div
              className={setOptionClass("Application")}
              onClick={() => handleSetOptions("Application")}
            >
              <i className="fa-solid fa-receipt"></i>
              <h6>Accept Application</h6>
              <p>Choose who to accept into your tribe.</p>
            </div>

            {/* Invite Only */}
            <div
              className={setOptionClass("Invite")}
              onClick={() => handleSetOptions("Invite")}
            >
              <i className="fa-solid fa-certificate"></i>
              <h6>Invite Only</h6>
              <p>Only people with invite can join tribe.</p>
            </div>
          </div>

          {/* Option Questions */}

          <div
            className={options === "Application" ? "section questions show shadow" : "section questions hide shadow"}
            ref={questionsRef}
          >
            {questions.map((question, idx) => (
              <div className="form__area" key={idx}>
                <label htmlFor="question">Question {idx + 1}</label>
                <Input
                  type="text"
                  name={`${question.question}`}
                  placeholder={`Question ${idx + 1}`}
                  onChange={handleFormOnChange(idx)}
                />
                <div className="actions flex__two">
                  <div className="required">
                    <input
                      type="checkbox"
                      name="required"
                      checked={question.required}
                      onChange={handleCheckBox(idx)}
                    />{" "}
                    Required
                  </div>
                  <div className="delete">
                    <i
                      className="fa-solid fa-trash"
                      onClick={() => handleDeleteQuestion(idx)}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
            <hr />
            <button className="button-sm" onClick={handleAddQuestion}>
              <i className="fa-solid fa-plus"></i> Add Question
            </button>
          </div>

          <hr />

          {/* Access Level */}
          <div className="section">
            <div className="form__area">
              <label htmlFor="accessLevel">Access Level</label>
              <Input
                type="select"
                name="accessLevel"
                value={accessLevel}
                onChange={(e) => setAccessLevel(e.target.value as AccessLevel)}
              >
                <option selected hidden>
                  Select Access Level
                </option>
                <option value="paid">Paid</option>
                <option value="free">Free</option>
              </Input>
            </div>
          </div>

          {/* Set Price for Paid Access Level */}
          {accessLevel === "paid" ? (
            <>
              <div className="section">
                <div className="form__area">
                  <label htmlFor="price">Set Price</label>
                  <Input
                    type="number"
                    name="tribe_fee"
                    placeholder="Set Price Free"
                  />
                </div>
              </div>
              <div className="section">
                <div className="form__area">
                  <label htmlFor="subscription_frequency">
                    Subscription Frequency
                  </label>
                  <Input type="select">
                    <option selected hidden>
                      Select Frequency
                    </option>
                    <option value="One Time Off">One Time Off</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                  </Input>
                </div>
              </div>
            </>
          ) : (
            ""
          )}

          {/* Create Tribe */}
          <div className="section">
            <button className="flex__four button-sm">
              <i className="fa-solid fa-circle-check"></i> Create Tribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTribe;
