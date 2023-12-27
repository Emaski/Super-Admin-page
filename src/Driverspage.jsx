import {
  faBars,
  faBell,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Driverspage = (props) => {

  
  return (
    <div className="container">
      <button  onClick={props.theClick} className="hamburger">
      <div className="bar"></div>
        
      </button>
      
      <h1 className="nav-item">Drivers</h1>
      <ul className="nav horizontal-list">
        <li className="nav-item">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon={faBell} />
        </li>
        <li
          className="nav-item"
          style={{ borderLeft: "1px solid black", paddingLeft: "10px" }}
        >
          <p>Super Admin</p>
        </li>
        <span
          className="span"
          style={{
            width: "2rem",
            height: "2rem",
            borderRadius: "100%",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        ></span>
      </ul>
    </div>
  );
};

export default Driverspage;
