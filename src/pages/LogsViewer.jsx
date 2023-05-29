import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import './LogsViewer.css';

const LogsViewer = () => {
  const [user, setUser] = useState({
    userID: "",
    done_by: "",
    inTime: "",
    Device: "",
    Status: "",
    purpose: "",
  });

  const handleInputs = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user.userID);
  };
  const [students, setStudents] = useState([]);

const apiGet= async(e)=>{
 e.preventDefault();
const res= await fetch("/userlogs",{
  method:'GET',
  headers: {
            "Content-Type": "application/json"
        },
 });
 const data= await res.json();
 if(data){
  console.log(data);
  setStudents(data.data);

  getStudent();
 }else{
  console.log("error");
 }
};
 const getStudent=()=>{

  students.map((student) => {
    if (student.user_id == user.userID) {
      console.log(student.name);
     const newuser= {
      userID: user.userID,
      done_by:student.done_by,
      inTime:student.inTime,
      Device:student.Device,
      Status:student.Status,
      purpose:student.purpose,
    };

    setUser(newuser);
    console.log(user.done_by);
    console.log(user.inTime);
    console.log(user.Status);
    }
  });

  console.log(user.userID);
 }

  return (
    <>
    <div className="LogsViewer-container">
      <img className="logs-image" src="https://cdn-icons-png.flaticon.com/512/2620/2620995.png"
      alt="Log-image"/>
      <div>
        <h5 className="logs-heading">30 DAYS LOGS</h5>
      </div>
      <label>
        <input
          className="input-logsViewer"
          type="text"
          name="userID"
          value={user.userID}
          onChange={handleInputs}
          placeholder="Enter UserId"
        />
        <br />
      </label>
      <br />
      <button className="logsViewer-btn" onClick={apiGet}>
        FIND
      </button>
      </div>
      <div className="st-logs">
          {/* <h4 className="heading-4">Details of Student: </h4> */}
          {/* <div className="stLog-container"> */}
              <h4>{user.done_by}</h4>
              <p>{user.inTime}</p><br/>
              <p>{user.Status}</p><br/>
              <p>{user.purpose}</p>
        </div>
          {/* <table className="UserDetailTable"> */}
            {/* <thead>
              <tr>
                <th>User ID</th>
                <th>Email</th>
                <th>Branch</th>
                <th>Session</th>
                <th>Hostel</th>
                <th>Room No.</th>
              </tr>
            </thead> */}
            {/* <tbody>
              <tr>
                <td data-label="Done by">{user.done_by}</td>
                <td data-label="In Time">{user.inTime}</td>
                <td data-label="Status">{user.Status}</td>
                <td data-label="Purpose">{user.purpose}</td>
              </tr>
            </tbody>
          </table> */}

      
        {/* <div className="btn">
       <button class="btn" type="button" onClick={Popup}>Submit</button>
       </div> */}
      
    </>
  );
};
export default LogsViewer;

