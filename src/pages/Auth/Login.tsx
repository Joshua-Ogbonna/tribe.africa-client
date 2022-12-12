import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from 'reactstrap'

import "./Auth.css"
import Brand from '../../components/Reusables/Brand/Brand'

const Login = () => {
  return (
    <div className="auth">
      <div className="auth__section shadow-sm">
        <Brand />
        <form>
            <h5>Login</h5>
            <div className="form__area">
                <label htmlFor="email">Email</label>
                <Input type="email" placeholder="johndoe@email.com" />
            </div>
            <div className="form__area">
                <label htmlFor="password">Password</label>
                <Input type="password" placeholder="***************" />
            </div>
            <div className="form__area alt">
                <button>Sign In</button>
                <div>No account? <Link to="/onboard">Sign Up</Link></div>
            </div>
        </form> 
      </div>
    </div>
  )
}

export default Login