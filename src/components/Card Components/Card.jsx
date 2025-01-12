import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { TfiPinterest } from "react-icons/tfi";
import profile_image from "../Assets/Card_Project_Images/profile.jpg";
import "./card.css";

const Card = () => {
  return (
    <div className="container">
      <div className="card-wrapper">
        <div className="content">
          <h4 className="title">Jill Scott</h4>
          <p className="designation">Frontend Engineer</p>
          <p className="about">
            Transforming ideas into realities, creating interfaces that inspire
            and engage users dreams.
          </p>
          <div className="social-links">
            <ul>
              <li>
                <a href="#linkedin">
                  <FaLinkedinIn className="icon" />
                </a>
              </li>
              <li>
                <a href="#github">
                  <TbBrandGithubFilled className="icon" />
                </a>
              </li>
              <li>
                <a href="#pinterest">
                  <TfiPinterest className="icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile-wrapper">
          <img src={profile_image} alt="Profile photo" />
        </div>
      </div>
    </div>
  );
};

export default Card;
