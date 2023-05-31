import React from "react";
import { useState } from "react";
import "./MakeManualEntry.css";
import "bootstrap/dist/css/bootstrap.min.css";



const MakeManualEntry = () => {
   const [content, setContent] = useState(<></>);

  // const handleClick = (event) => {
  //   setContent(<ManualEntryPage />);
  // };

  const [enterUserId, setEnterUserId] = useState("");
  const uIdChangeHandelar = (event) => {
    setEnterUserId(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // ManualData();
    const entryData = {
      enterUserId: "",
    };
    console.log(entryData);
    setEnterUserId("");
  };
  const [user,setUser]=useState({
    userID: "",
    done_by: "",
    inTime: "",
    Device: "",
    Status: "",
    purpose: "",
  })
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
    <div onSubmit={submitHandler} className="manual-entry">
      <img className="manual-entry-image" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/journal-entry-4070623-3367148.png" alt="manual-entry-image"/>
      <h5 className="manual-Entry-heading">
        Make Manual Entry
      </h5>
      <label>
        <input
          className="manual-entry-input"
          value={enterUserId}
          type="text"
          onChange={uIdChangeHandelar}
          placeholder="Enter userId"
        />
        <br />
      </label>
      <br />
      <button className="manual-entry-btn">
        SUBMIT
      </button>
      <div className="detail">{content}</div>
    </div>
    </>
  );
};

export default MakeManualEntry;













