import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faLocationDot,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a>
              <FontAwesomeIcon icon={faHome} className="custom-icons" />
              Home
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="custom-icons"
              />
              About
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faLocationDot} className="custom-icons" />
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      <nav className="mobile-nav">
        <ul>
          <li>
            <a>
              <FontAwesomeIcon icon={faHome} className="custom-icons" />
              Home
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="custom-icons"
              />
              About
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faLocationDot} className="custom-icons" />
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
