import React, { useState, useContext } from "react";
import { AuthContext } from "../../Contexts/auth/AuthContext";
import { Social, RegisterSection } from "./style";
import {
  ValidateUsername,
  ValidateEmail,
  ValidatePassword,
  ConfirmPassword,
} from "../../Utils/Validators";

import Button from "../../Components/Button";
import { useNavigate, Link } from "react-router-dom";

import google from "../../images/google-icon.png";
import facebook from "../../images/facebook-icon.png";

const Register = () => {
  const [registerLoading, setRegisterLoading] = useState();
  const [form, setForm] = useState([]);
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();

  const api = useContext(AuthContext);

  const handleSubmit = async (e) => {
    if (!ValidateInput) return;
    e.preventDefault();
    console.log("form: ", form);
    try {
      setRegisterLoading(true);

      const response = await api.Register(form);
      console.log("response do register", response);
      if (response === true) {
        alert("usuário cadastrado com sucesso - Navegar para login page");
        navigate("/login");
      }
      setRegisterLoading(false);
    } catch (err) {
      alert("Algo de errado não está certo! erro: " + err);
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const ValidateInput = () => {
    return (
      ValidateUsername(form.username) &&
      ValidateEmail(form.email) &&
      ValidatePassword(form.password) &&
      ConfirmPassword(form.password, form.confirmPassword)
    );
  };

  const VerifyUsernameOnBlur = () => {
    setErrorText(
      ValidateUsername(form.username) ? "" : "Username is not valid"
    );
  };

  const VerifyEmailOnBlur = () => {
    setErrorText(ValidateEmail(form.email) ? "" : "Email is not valid");
  };

  const VerifyPasswordOnBlur = () => {
    setErrorText(ValidatePassword(form.email) ? "" : "Email is not valid");
  };

  const ConfirmPasswordOnBlur = () => {
    setErrorText(
      ConfirmPassword(form.password, form.confirmPassword)
        ? ""
        : "Passwords is not equals"
    );
  };

  return (
    <RegisterSection>
      <div>
        <h1>Register</h1>
        <form id="LoginForm" onSubmit={handleSubmit}>
          <input
            className=""
            type="username"
            name="username"
            id="username"
            placeholder="username"
            onChange={handleChange}
            onBlur={VerifyUsernameOnBlur}
          />
          <input
            className="textInput"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={VerifyEmailOnBlur}
          />
          <input
            className="textInput"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={handleChange}
            onBlur={VerifyPasswordOnBlur}
          />
          <input
            className="textInput"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="confirm password"
            onChange={handleChange}
            onBlur={ConfirmPasswordOnBlur}
          />

          <span className="errorText">{errorText}</span>

          <Button text="Register" type="submit" onClick={handleSubmit} />
        </form>
        <br />
        <hr className="hr-text" data-content="Or register with" />

        <Social>
          <button>
            <img src={google} alt="" />
          </button>
          <button>
            <img src={facebook} alt="" />
          </button>
        </Social>

        <p>
          Already have account? <Link to="/login">Login now!</Link>
        </p>
      </div>
    </RegisterSection>
  );
};

export default Register;
