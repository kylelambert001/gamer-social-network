import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";

import LandingLayout from "../../layout/landing-layout/landing-layout";
import RegisterForm from "../../components/register-form/register-form";

import useRegister from "../../hooks/useRegister";

function Register(props) {
  const { state, registerAccount } = useRegister();
  return (
    <LandingLayout>
      <div className="register">
        <h1 className="register__heading">Account Registration</h1>
        <span className="register__subheading">
          Please create an account to continue
        </span>
        <RegisterForm registerAccount={registerAccount} />
        <span className="register__cta">
          Already have an account?
          <Link to="/login" className="register__link">
            Login here
          </Link>
        </span>
      </div>
    </LandingLayout>
  );
}

export default Register;
