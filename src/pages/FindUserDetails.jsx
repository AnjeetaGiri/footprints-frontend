import React, { useState } from "react";
import "./FindUserDetails.css";
import "./data.json";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../myStyles.module.css";

const FindUserDetails = () => {
  const [user, setUser] = useState({
    userID: "",
    name: "",
    email: "",
    mob: "",
    branch: "",
    session: "",
    hostel: "",
    room_no: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    //console.log(user.userID);
  };

  const [students, setStudents] = useState([]);

  const apiGet = async (e) => {
    e.preventDefault();
    const res = await fetch("/students", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data) {
      setStudents(data.data);
      getStudent();
    } 
    else {
      console.log("error");
    }
  };
  // apiGet();
  const getStudent = () => {
   
    students.map((student) => {
    
      if (student.user_id == user.userID) {

        const newuser = {
          userID: user.userID,
          name: student.name,
          email: student.email,
          mob: student.mob_no,
          branch: student.branch,
          session: student.session,
          hostel: student.hostel,
          room_no: student.room_no,
        };
        setUser(newuser);
      }
    });
  };
  return (
      <>
      <div className="user-detail">
      <img className="user-image" src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png" alt="user-icon"/>
        <h2>Find User Details</h2>
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
        <Button className={styles.button} onClick={apiGet}>
          PROCEED
        </Button>
        <div className="st-detail">
                   
          <div className="st-container">
              <div>
              <h4><b>{user.name}</b></h4> 
              <p>{user.email}</p>
              <p>{user.branch}</p>
              <p>{user.session}</p>
              <p>{user.hostel}</p>
              <p>{user.room_no}</p>
          </div>        
        </div>
        </div>
      </div>
      </>
    );
};

export default FindUserDetails;
