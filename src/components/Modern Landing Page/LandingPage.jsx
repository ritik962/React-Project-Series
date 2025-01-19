import "./landingpage.css";
import web_logo from "../Modern Landing Page/home.svg";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const LandingPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
    console.log(isNavOpen);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="app-wrapper">
      <nav>
        <div className="logo_wrapper">
          <img src={web_logo} alt="home_logo" />
        </div>
        <div className="menu-wrapper">
          <ul>
            <li>
              <a href="#products" className="active">
                Product
              </a>
            </li>
            <li>
              <a href="#solution">Solution</a>
            </li>
            <li>
              <a href="#price">Price</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="btns">
          <button className="login btn">Log In</button>
          <button className="started btn">Get Started</button>
        </div>
        <button className="hamburger_menu" onClick={handleClick}>
          {/* <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span> */}
          {isNavOpen ? (
            <IoClose className="sm_hamburger_icon" />
          ) : (
            <GiHamburgerMenu className="hamburger_icon" />
          )}
        </button>
      </nav>
      <div className="hero_section">
        <div className="hero_text">
          <p className="hero_para">Trusted by over 2800+ companies</p>
          <h1 className="hero_heading">
            Find Your <span className="hero_heading_span">Remote Job</span>
          </h1>
          <h1 className="hero_heading">Easy And Fast.</h1>
          <p className="hero_para-alice">
            A Platform where you can get your desired job without any hasse.
          </p>
        </div>
        <form className="input-wrapper" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email Address"
            className="input-field"
          />
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
      <div className={`sm_nav ${isNavOpen ? "open" : ""}`}>
        <div className="sm_hamburger" onClick={handleClick}>
          <IoClose className="sm_hamburger_icon" />
        </div>
        <ul>
          <li>
            <a href="#product">Product</a>
          </li>
          <li>
            <a href="#solution">Solution</a>
          </li>
          <li>
            <a href="#price">Price</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
