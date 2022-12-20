import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import { bindActionCreators } from "redux";

import { UseAppDispatch, UseAppSelector } from "../../app/storeHook";
import { loaderActions, userActions } from "../../app/actions";
import { post } from "../../helpers";

import "./Auth.css";

import Brand from "../../components/Reusables/Brand/Brand";
import { UtilsLoader } from "../../components/Reusables/Loaders";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { setUserDetails, toggleLoader } = bindActionCreators(
    { ...userActions, ...loaderActions },
    UseAppDispatch()
  );
  const {
    loaders: { buttonLoader },
  } = UseAppSelector((state) => state);

  const handleOnChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      toggleLoader(true);
      const { data } = await post("/login", user);
      setUserDetails(data.token);
      sessionStorage.setItem("token", data.token);
      console.log(data);
      toggleLoader(false);
    } catch (error) {
      toggleLoader(false);
      console.log(error);
    }
  };

  return (
    <div className="auth">
      <div className="auth__section shadow-sm">
        <Brand />
        <form>
          <h5>Login</h5>
          <div className="form__area">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              placeholder="johndoe@email.com"
              name="email"
              value={user.email}
              onChange={handleOnChangeEvent}
            />
          </div>
          <div className="form__area">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              placeholder="***************"
              name="password"
              value={user.password}
              onChange={handleOnChangeEvent}
            />
          </div>
          <div className="form__area alt">
            <button onClick={login}>
              {buttonLoader ? <UtilsLoader /> : "Sign In"}
            </button>
            <div>
              No account? <Link to="/onboard">Sign Up</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
