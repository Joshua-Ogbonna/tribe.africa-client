import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import { bindActionCreators } from "redux";
import toast from "react-hot-toast";

import Brand from "../../components/Reusables/Brand/Brand";
import { UtilsLoader } from "../../components/Reusables/Loaders";

import { UseAppDispatch, UseAppSelector } from "../../app/storeHook";
import { loaderActions } from "../../app/actions";

import "./Auth.css";
import { post } from "../../helpers";

const SignUp = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const { toggleLoader } = bindActionCreators(loaderActions, UseAppDispatch());
  const {
    loaders: { buttonLoader },
  } = UseAppSelector((state) => state);

  const handleOnChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const signup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user.email || !user.name || !user.password) {
      return toast.error("All input fields are required 😏", {
        position: "top-center",
        duration: 2000,
      });
    }
    try {
      toggleLoader(true);
      const { data } = await post("/register", user);
      sessionStorage.setItem("token", data.token);
      toast.success(data.message, { duration: 2000, position: "top-center" });
      toggleLoader(false);
      console.log(data);
    } catch (error: any) {
      console.error(error?.response?.data?.message);
      toast.error(
        error?.response
          ? error?.response?.data?.message
          : "An error occured. Please try again",
        { duration: 2000, position: "top-center" }
      );
      toggleLoader(false);
    }
  };

  return (
    <div className="auth">
      <div className="auth__section shadow-sm">
        <Brand />
        <form>
          <h5>Create Account</h5>
          <div className="form__area">
            <label htmlFor="name">Name</label>
            <Input
              type="text"
              name="name"
              placeholder="John Obi"
              value={user.name}
              onChange={handleOnChangeEvent}
            />
          </div>
          <div className="form__area">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              name="email"
              placeholder="johndoe@email.com"
              value={user.email}
              onChange={handleOnChangeEvent}
            />
          </div>
          <div className="form__area">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              name="password"
              placeholder="***************"
              value={user.password}
              onChange={handleOnChangeEvent}
            />
          </div>
          <div className="form__area alt">
            <button onClick={signup}>
              {buttonLoader ? <UtilsLoader /> : "Create Account"}
            </button>
            <div>
              Got an account? <Link to="/login">Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
