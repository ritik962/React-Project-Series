import "./loginSignup.css";
import user_icon from "../Assets/LoginSignup_images/person.png";
import email_icon from "../Assets/LoginSignup_images/email.png";
import password_icon from "../Assets/LoginSignup_images/password.png";
import { useState } from "react";

const LoginSignupForm = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="wrapper">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="user-icon" />
            <input
              type="text"
              placeholder="Name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="email-icon" />
          <input
            type="email"
            placeholder="Email id"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="password-icon" />
          <input
            type="password"
            name="new-password"
            placeholder="Password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            autoComplete="new-password"
          />
        </div>
        <p className="message">
          Lost Password? <a href="#">Click here!</a>
        </p>
      </div>
      <div className="action-btns">
        <button
          className={action === "Login" ? "btn signup gray" : "btn signup"}
          onClick={() => setAction("Sign Up")}
        >
          sign up
        </button>
        <button
          className={action === "Sign Up" ? "btn signin gray" : "btn signin"}
          onClick={() => setAction("Login")}
        >
          sign in
        </button>
      </div>
    </div>
  );
};

export default LoginSignupForm;
