import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import styles from "../myStyles.module.css";
import Late from "./Late.jsx";

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
  // const renderTable = () => {
  //   const [table, setTable] = useState("");
  // };
//   console.log(user.userID);
// };

const apiGet= async(e)=>{
 e.preventDefault();
const res= await fetch("/userlogs",{
  method:'GET',
  headers: {
              "Content-Type": "application/json"
        },
 })
 const data= await res.json();
 if(data){
  console.log(data);
  setStudents(data.data);

  getStudent();
 }else{
  console.log("error");
 }
}
 const getStudent=()=>{

  students.map((student) => {
    if (student.user_id == user.userID) {
      console.log(student.name);
     const newuser= {

      userID: user.userID,
      done_by:student.done_by,
      email:student.email,
      mob:student.mob_no,
      branch:student.branch,
      session:student.session,
      hostel:student.hostel,
      room_no:student.room_no,
    };

    setUser(newuser);
    console.log(user.name);
    console.log(user.branch);
    console.log(user.hostel);
    }
  });

  console.log(user.userID);
 }

  return (
    <>
    <div className="user-detail">
      <div>
        <h2>30 DAYS LOGS</h2>
      </div>
      <label>
        <input
          className="input-text"
          type="text"
          name="viewLog"
          value={user.userID}
          onChange={handleInputs}
          placeholder="Enter userId"
        />
        <br />
      </label>
      <br />
      <Button className={styles.button} onClick={() => setUser}>
        Find
      </Button>
      <div className="st_detail">
          <h4 className="heading-4">Details of Student: </h4>
          <table className="UserDetailTable">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Email</th>
                <th>Branch</th>
                <th>Session</th>
                <th>Hostel</th>
                <th>Room No.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Name">{user.name}</td>
                <td data-label="Email">{user.email}</td>
                <td data-label="Branch">{user.branch}</td>
                <td data-label="Session">{user.session}</td>
                <td data-label="Hostel">{user.hostel}</td>
                <td data-label="Room_No">{user.room_no}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div className="btn">
       <button class="btn" type="button" onClick={Popup}>Submit</button>
       </div> */}
      </div>
    </>
  );
};
export default LogsViewer;

// const [user, setUser] = useState({
//   userID: "",
//   name:"",
//   email:"",
//   mob:"",
//   branch:"",
//   session:"",
//   hostel:"",
//   room_no:""
// });

// const handleInputs = (e) => {
//   console.log(e);
//   const { name, value } = e.target;
//   setUser({ ...user, [name]: value });

//   console.log(user.userID);
// };

// const [students, setStudents] = useState([]);

// const apiGet= async(e)=>{
//  e.preventDefault();
// const res= await fetch("/students",{
//   method:'GET',
//   headers: {
//               "Content-Type": "application/json"
//         },
//  })
//  const data= await res.json();
//  if(data){
//   console.log(data);
//   setStudents(data.data);

//   getStudent();
//  }else{
//   console.log("error");
//  }
// }

//  const getStudent=()=>{

//   students.map((student) => {
//     if (student.user_id == user.userID) {
//       console.log(student.name);
//      const newuser= {

//       userID: user.userID,
//       name:student.name,
//       email:student.email,
//       mob:student.mob_no,
//       branch:student.branch,
//       session:student.session,
//       hostel:student.hostel,
//       room_no:student.room_no,
//     };

//     setUser(newuser);
//     console.log(user.name);
//     console.log(user.branch);
//     console.log(user.hostel);
//     }
//   });

//   console.log(user.userID);
//  }
// return (
//   <>
//      {/* <div>
//     {students.map((student) => (
//       <div key={student.id}>{student.name}</div>
//     ))}
//   </div> */}

//    <div className="user-detail">
//      <h2>Find User Details</h2>

//     <label>
//       <input
//          className="input-text"
//          type="text"
//          name="userID"
//          value={user.userID}
//          onChange={handleInputs}
//          placeholder="Enter userId"
//        />
//        <br />
//      </label>
//      <br />
//      <Button className={styles.button} onClick={apiGet}>
//        PROCEED
//      </Button>

// <div className="st_detail">
//   <h4 className="heading-4">Details of Student: </h4>
//   <table className="UserDetailTable">
//     <thead>
//          <tr>
//           <th>User ID</th>
//            <th>Email</th>
//            <th>Branch</th>
//            <th>Session</th>
//            <th>Hostel</th>
//            <th>Room No.</th>
//         </tr>
//       </thead>
//             <tbody>
//             <tr>
//             <td data-label="Name">{user.name}</td>
//             <td data-label="Email">{user.email}</td>
//             <td data-label="Branch">{user.branch}</td>
//             <td data-label="Session">{user.session}</td>
//             <td data-label="Hostel">{user.hostel}</td>
//             <td data-label="Room_No">{user.room_no}</td>
//             </tr>
//            </tbody>
//      </table>
//     </div>
//      {/* <div className="btn">
//      <button class="btn" type="button" onClick={Popup}>Submit</button>
//      </div> */}
//    </div>

//   </>
// );
