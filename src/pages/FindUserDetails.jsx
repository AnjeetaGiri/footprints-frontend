import React, { useState } from "react";
import "./FindUserDetails.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../myStyles.module.css";

const FindUserDetails = () => {
  const Popup = () => {};
  const [user, setUser] = useState({
    userID: "",
  });
  const handleInputs = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div className="user-detail">
      <h2>Find User Details</h2>
      {/* ------Previous code:------ */}
      <label>
        <input
          className="input-text"
          type="text"
          name="userID"
          value={user.userID}
          onChange={handleInputs}
          placeholder="Enter userId"
        />
        <br />
      </label>
      <br />
      <Button className={styles.button} onClick={Popup}>
        PROCEED
      </Button>
      {/* <div className="btn">
      <button class="btn" type="button" onClick={Popup}>Submit</button>
      </div> */}
    </div>
  );
};

export default FindUserDetails;
