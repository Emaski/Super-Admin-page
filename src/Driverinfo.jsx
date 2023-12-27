import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faAngleDoubleRight,
  faAngleDown,
  faChevronLeft,
  faChevronRight,
  faEye,
  faPen,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Driversinfo = () => {


  const [divSize, setDivSize] = useState({
    width: "60.625rem",
    height: "14rem",
  });


  const updateSize = () => {
    if (window.innerWidth > 1480) {
      setDivSize({
        width: "60.625rem",
        height: "14rem",
          
      }); 
  } else if(window.innerWidth > 1110 && window.innerWidth < 1480 ) {
    setDivSize({
      width:    "45rem",
        height: "14rem",
    });
  } else if(window.innerWidth > 880 && window.innerWidth < 1110 ) {
    setDivSize({
      width:    "35rem",
        height: "14rem",
    });
  } else if(window.innerWidth > 830 && window.innerWidth < 880 ) {
    setDivSize({
      width:    "33rem",
        height: "14rem",
    });
  } else if(window.innerWidth > 690 && window.innerWidth < 830 ) {
    setDivSize({
      width:    "30rem",
        height: "14rem",
    });
  }

};


window.onresize = updateSize;


  return (
    <div className="overlay" style={divSize}>
      <h1>All Drivers</h1>

      <ul>
        <input
        className="inputclass"
          type="search"
          placeholder="Search Drivers"
          aria-label="Search"
        ></input>
        <button type="submit">
          New Driver <FontAwesomeIcon icon={faPlus} />
        </button>
      </ul>

      <table className="styled-table">
        <tr>
          <th>Driver's Information</th>
          <th>Address</th>
          <th>License</th>
          <th>Phone Number</th>
          <th>Created On</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>ete4efr rsrfetrebr wegtrfe</td>
          <td>23, rtgtvtvtrb vssbervsev v</td>
          <td>ASDDEGF32D</td>
          <td>0850393292</td>
          <td>12/12/23</td>
          <td>
            <FontAwesomeIcon icon={faEye} /> <FontAwesomeIcon icon={faPen} />{" "}
            <FontAwesomeIcon icon={faTrash} />
          </td>
        </tr>

        <div id="actions">
          <p>Rows per page:</p>
          <p className="underline">
            10 <FontAwesomeIcon icon={faAngleDown} />{" "}
          </p>
          <p>1-1 of 1</p>
          <p>
            <FontAwesomeIcon icon={faChevronLeft} />
            <FontAwesomeIcon icon={faChevronRight} />
          </p>
        </div>
      </table>
    </div>
  );


  }
export default Driversinfo;
