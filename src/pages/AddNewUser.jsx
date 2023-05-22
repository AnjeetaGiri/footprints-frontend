import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./AddNewUser.css";
import Axios from "axios";
import styles from "../myStyles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AddNewUser = () => {
  // const [name,setName]=useState("");
  // const [email,setEmail]=useState("");
  // const [Mob_no,setMobno]=useState("");
  // const [branch,setBranch]=useState("");
  // const [session,setSession]=useState("");
  // const [hostel,setHostel]=useState("");
  // const [room_no,setRoomno]=useState("");
  // const [message,setMessage]=useState("");
  // const [rollno,setRollno]=useState("");

  // let handleSubmit = async (e) => {
  //   e.preventDefault();
  //   //console.log(name);
  //   try {
  //     const res = await fetch("/students", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body:{
  //         name: name,
  //         user_id:rollno,
  //         email: email,
  //         Mob_no: Mob_no,
  //         branch: branch,
  //         session: session,
  //         hostel: hostel,
  //         room_no: room_no
  //       }.json(),
  //     });
  //     let resJson = await res.json();
  //     if(resJson){
  //       console.log(resJson);
  //     }
  //     if (res.status === 201) {
  //       setName("");
  //       setRollno("");
  //       setEmail("");
  //       setMobno("");
  //       setBranch("");
  //       setSession("");
  //       setHostel("");
  //       setRoomno("");
  //       setMessage("User created successfully");
  //     } else {
  //       setMessage("Some error occured");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // return (
  //   <div className="wrapper rounded bg-white">
  //     <div className="box">
  //       {/* <form onSubmit={handleSubmit}> */}
  //       <form onSubmit={handleSubmit}>
  //         <div className="h3">Add New User</div>

  //         <div className="row">
  //           <div className="col-25">
  //             <label>Name</label>
  //           </div>
  //           <div className="col-75">
  //             <input
  //               className="input-AddNewUsertype"
  //               type="text"
  //               name="name"
  //               value={name}
  //               onChange={(e)=>setName(e.target.value)}
  //               // required
  //             />
  //           </div>
  //         </div>

  //          <div className="row">
  //           <div className="col-25">
  //             <label>Roll No.</label>
  //           </div>
  //           <div className="col-75">
  //             <input
  //               type="number"
  //               className="input-AddNewUsertype"
  //               name="rollNo"
  //               value={rollno}
  //               onChange={(e)=>setRollno(e.target.value)}
  //               // required
  //             />
  //           </div>
  //         </div> 

  //         <div className="row">
  //           <div className="col-25">
  //             <label>Mobile No.</label>
  //           </div>
  //           <div className="col-75">
  //             <input
  //               type="number"
  //               className="input-AddNewUsertype"
  //               name="Mob_no"
  //               value={Mob_no}
  //               onChange={(e)=>setMobno(e.target.value)}
  //               // required
  //             />
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-25">
  //             <label>Email</label>
  //           </div>
  //           <div className="col-75">
  //             <input
  //               className="input-AddNewUsertype"
  //               type="email"
  //               name="email"
  //               value={email}
  //               onChange={(e)=>setEmail(e.target.value)}
  //               // required
  //             />
  //           </div>
  //         </div>

  //         <div className="row">
  //           <div className="col-25">
  //             <label>Branch</label>
  //           </div>
  //           <div className="col-75">
  //             <input
  //               className="input-AddNewUsertype"
  //               type="text"
  //               name="branch"
  //               value={branch}
  //               onChange={(e)=>setBranch(e.target.value)}
  //               // required
  //             />
  //           </div>
  //         </div>

  //         <div className="row">
  //           <div className="col-25">
  //             <label>Session</label>
  //           </div>
  //           <div className="col-75">
  //             <input
  //               className="input-AddNewUsertype"
  //               type="text"
  //               name="session"
  //               value={session}
  //               onChange={(e)=>setSession(e.target.value)}
  //               // required
  //             />
  //           </div>
  //         </div>

  //         <div className="row">
  //           <div className="col-25">
  //             <label>Hostel</label>
  //           </div>
  //           <div className="col-75">
  //             <input
  //               className="input-AddNewUsertype"
  //               type="text"
  //               name="hostel"
  //               value={hostel}
  //               onChange={(e)=>setHostel(e.target.value)}
  //               // required
  //             />
  //           </div>
  //         </div>

  //         <div className="row">
  //           <div className="col-25">
  //             <label>Room No.</label>
  //           </div>
  //           <div className="col-75">
  //             <input
  //               className="input-AddNewUsertype"
  //               type="text"
  //               name="room_no"
  //               value={room_no}
  //               onChange={(e)=>setRoomno(e.target.value)}
  //               // required
  //             />
  //           </div>
  //         </div>
          

  //           {/* <Button className={styles.button}>
  //             Submit
  //           </Button> */}
  //           <button className="Add_btn" type="submit">ADD</button>
  //           <div className="message">{message ? <p>{message}</p> : null}</div>
  //         {/* </div> */}
  //       </form>
  //     </div>
  //   </div>
  // );


  //----------------NEW CODE------------------
  const url="https://localhost:3000/footprints-api.onrender.com/students";
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
        {/* <form onSubmit={handleSubmit}> */}
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
                // required
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
                // required
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
                // required
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
                // required
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
                // required
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
                // required
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

                // required
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
                // required
              />
            </div>
          </div>
          <button className="Add_btn">ADD</button>

            {/* <Button className={styles.button}>
              Submit
            </Button> */}
            {/* <button className="Add_btn" type="submit">ADD</button>
            <div className="message">{message ? <p>{message}</p> : null}</div> */}
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default AddNewUser;
