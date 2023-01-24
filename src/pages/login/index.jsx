import React, { useState, useContext } from "react";
import { LoginSection, SocialLogin } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { ValidateEmail, ValidatePassword } from "../../Utils/Validators.js";
import { AuthContext } from "../../Contexts/auth/AuthContext";

import Button from "../../Components/Button";

import google from "../../images/google-icon.png";
import facebook from "../../images/facebook-icon.png";

const Login = () => {
  const [loginLoading, setLoginLoading] = useState();
  const [form, setForm] = useState([]);
  const navigate = useNavigate();

  const auth = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ValidateInput()) return;
    try {
      setLoginLoading(true);

      const response = await auth.Login(form);

      if (response === true) {
        navigate("/");
      }
      setLoginLoading(false);
    } catch (err) {
      alert("Algo de errado não está certo! erro: " + err);
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const ValidateInput = () => {
    return ValidateEmail(form.email) && ValidatePassword(form.password);
  };

  //console.log(ValidateInput());

  return (
    <LoginSection>
      <div>
        <h1>Login</h1>
        <form id="LoginForm" onSubmit={handleSubmit}>
          <input
            className="textInput"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            className="textInput"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={handleChange}
          />
          <Link className="passRecover" to="/recover">
            Forgot Password?
          </Link>

          <Button
            text="Login"
            type="submit"
            onClick={handleSubmit}
            disabled={(loginLoading === true) | ValidateInput() ? false : true}
          />
        </form>
        <br />
        <hr className="hr-text" data-content="Or login with" />

        <SocialLogin>
          <button>
            <img src={google} alt="" />
          </button>
          <button>
            <img src={facebook} alt="" />
          </button>
        </SocialLogin>

        <p>
          Not register yet? <Link to="/register">Create Account</Link>
        </p>
      </div>
    </LoginSection>
  );
};

export default Login;
