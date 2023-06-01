import React, { useState } from "react";
import "./FindUserDetails.css";

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
      <div className="finduser">
      <div className="FindUser-Container">
      <img className="user-image" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.2.118633946.1684948342&semt=ais" alt="user-icon"/>
      <h5 className="FindUser-Heading">Find User Details</h5>
        {/* <h2>Find User Details</h2> */}
        <label>
          <input
            className="input-FindUser"
            type="text"
            name="userID"
            value={user.userID}
            onChange={handleInputs}
            placeholder="Enter UserId"
          />
        </label>
        <br />
        <button className="FindDetails-btn" onClick={apiGet}>
          FIND
        </button>
        </div>
        <div className="st-detail"> 
              <h4><b>{user.name}</b></h4> 
              <p>{user.email}</p>
              <p>{user.branch}</p>
              <p>{user.session}</p>
              <p>{user.hostel}</p>
              <p>{user.room_no}</p>      
      </div>
      </div>
      </>
    );
};
export default FindUserDetails;
