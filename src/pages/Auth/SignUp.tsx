import React from "react";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";

import Brand from "../../components/Reusables/Brand/Brand";

import "./Auth.css";

const SignUp = () => {
  return (
    <div className="auth">
      <div className="auth__section shadow-sm">
        <Brand />
        <form>
            <h5>Create Account</h5>
            <div className="form__area">
                <label htmlFor="email">Email</label>
                <Input type="email" placeholder="johndoe@email.com" />
            </div>
            <div className="form__area">
                <label htmlFor="password">Password</label>
                <Input type="password" placeholder="***************" />
            </div>
            <div className="form__area alt">
                <button>Create Account</button>
                <div>Got an account? <Link to="/login">Login</Link></div>
            </div>
        </form> 
      </div>
    </div>
  );
};

export default SignUp;
