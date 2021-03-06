import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

import LandingLayout from "../../layout/landing-layout/landing-layout";
import LoginForm from "../../components/login-form/login-form";

function Login(props) {
  return (
    <LandingLayout>
      <div className="login">
        <h1 className="login__heading">Account Login</h1>
        <span className="login__subheading">Please login to continue</span>
        <LoginForm />
        <span className="login__cta">
          Don't have an account?
          <Link to="/register" className="login__link">
            Register an account
          </Link>
        </span>
      </div>
    </LandingLayout>
  );
}

export default Login;
