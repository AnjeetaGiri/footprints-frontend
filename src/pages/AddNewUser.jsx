import React, { useState } from "react";
import "./AddNewUser.css";
import Axios from "axios";

const AddNewUser = () => {

  const [message,setMessage]=useState("");
  const [data,setData]=useState({
    user_id:"",
    name: "", 
    email:"",
    Mob_no:"",
    branch:"",
    session:"",
    hostel:"",
    room_no: ""
  })
  const url="/students";
  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      user_id:data.user_id,
      name:data.name,
      email:data.email,
      Mob_no:data.Mob_no,
      branch:data.branch,
      session:data.session,
      hostel:data.hostel,
      room_no:data.room_no      
    })
    .then(res=>{
      console.log(res.data);
      if (res.status === 201) { 
               const newdata={
                user_id:"",
                name: "", 
                email:"",
                Mob_no:"",
                branch:"",
                session:"",
                hostel:"",
                room_no: ""
              }  
              setData(newdata);  
              setMessage("User created successfully");
            }
    }).catch(err=>{
      console.log(err);
    })
  }
  function handle(e){
    const newdata={...data};
    newdata[e.target.id]=e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  return (
    <div className="wrapper rounded bg-white">
      <div className="box">
        <form onSubmit={(e)=>submit(e)}>
          <div className="h3">Add New User</div>

          <div className="row">
            <div className="col-25">
              <label>Roll No.</label>
            </div>
            <div className="col-75">
              <input
                onChange={(e)=>handle(e)} 
                type="number"
                className="input-AddNewUsertype"
                id="user_id"
                value={data.user_id}
                required
              />
            </div>
          </div> 

          <div className="row">
            <div className="col-25">
              <label>Name</label>
            </div>
            <div className="col-75">
              <input
                onChange={(e)=>handle(e)} 
                className="input-AddNewUsertype"
                id="name"
                value={data.name}
                type="text"
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Mobile No.</label>
            </div>
            <div className="col-75">
              <input
                onChange={(e)=>handle(e)} 
                type="number"
                className="input-AddNewUsertype"
                id="Mob_no"
                value={data.Mob_no}
                required
              />
            </div>
          </div>
          
          <div className="row">
            <div className="col-25">
              <label>Email</label>
            </div>
            <div className="col-75">
              <input
                onChange={(e)=>handle(e)} 
                className="input-AddNewUsertype"
                type="email"
                id="email"
                value={data.email}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Branch</label>
            </div>
            <div className="col-75">
              <input
                onChange={(e)=>handle(e)} 
                className="input-AddNewUsertype"
                type="text"
                id="branch"
                value={data.branch}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Session</label>
            </div>
            <div className="col-75">
              <input
                onChange={(e)=>handle(e)} 
                className="input-AddNewUsertype"
                type="text"
                id="session"
                value={data.session}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Hostel</label>
            </div>
            <div className="col-75">
              <input
                onChange={(e)=>handle(e)} 
                className="input-AddNewUsertype"
                type="text"
                id="hostel"
                value={data.hostel}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Room No.</label>
            </div>
            <div className="col-75">
              <input
                onChange={(e)=>handle(e)} 
                className="input-AddNewUsertype"
                type="text"
                id="room_no"
                value={data.room_no}
                required
              />
            </div>
          </div>
          <button className="Add_btn" >ADD</button>
        </form>
      </div>
      <div className="message">{message ? <p>{message}</p> : null}</div>
    </div>
  );
};

export default AddNewUser;














  // const Popup=()=>{
  //   return(
  //     <div className="Popup-container">
  //     <div className="popup">
  //     <img src="https://img.freepik.com/premium-vector/green-check-mark-icon-symbol-logo-circle-tick-symbol-green-color-vector-illustration_685751-503.jpg?w=740" alt="tick_picture"/>
  //     <h2>Thank You!</h2>
  //     <p>User has been successfully added!</p>
  //     <button type="button">OK</button>
  //   </div>
  // </div>
  //   )

     
  // }