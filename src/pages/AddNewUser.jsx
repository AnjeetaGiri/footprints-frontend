import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./AddNewUser.css";
import styles from "../myStyles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
const AddNewUser = () => {
  const ClickHandler = () => {};
  const [user, setUser] = useState({
    name: "",
    rollNo: "",
    mobileNo: "",
    email: "",
    branch: "",
    session: "",
    hostel: "",
    roomNo: "",
    role: "",
  });
  const handleInputs = (e) => {
    console.log(e);
    const{name,value} = e.target;
    setUser({ ...user, [name]:value });
  }
  // const PostData = async(e)=>{
  //     e.preventDefault();
  //     const{ name, rollNo, mobileNo, email, branch, session, hostel, roomNo, role }=user;
  // }
  // return (
  //   <>
  //     <section className="AddNewUser">
  //       {console.log("User",user)}
  //       <div className="container mt-5">
  //         <div className="signup-content">
  //           <div className="AddNUser-form">
  //             <h2 className="form-title">Add New User</h2>
  //             <form method="POST" className="register-form" id="register-form">

  //               <div className="form-group">
  //                 <label htmlFor="name">
  //                 <i class="zmdi zmdi-account-add material-icons-name"></i>
  //                 </label>
  //                 <input type="text" 
  //                 name="name" id="name" 
  //                 autoComplete="off"
  //                 value={user.name}
  //                 onChange={handleInputs} placeholder="Name"/> 
  //               </div>

  //               <div className="form-group">
  //                 <label htmlFor="rollNo">
  //                 <i class="zmdi zmdi-account-add material-icons-rollNo"></i>
  //                 </label>
  //                 <input type="number" name="rollNo" id="rollNO" autoComplete="off"
  //                 value={user.rollNo}
  //                 onChange={handleInputs} placeholder="Roll No"/> 
  //               </div>

  //               <div className="form-group">
  //                 <label htmlFor="mobileNo">
  //                 <i class="zmdi zmdi-account-add material-icons-mobileNo"></i>
  //                 </label>
  //                 <input type="number" name="mobileNo" id="mobileNo" autoComplete="off" 
  //                 value={user.mobileNo}
  //                 onChange={handleInputs}placeholder="Mobile No"/> 
  //               </div>

  //               <div className="form-group">
  //                 <label htmlFor="email">
  //                 <i class="zmdi zmdi-account-add material-icons-name"></i>
  //                 </label>
  //                 <input type="email" name="email" id="email" autoComplete="off" 
  //                 value={user.email}
  //                 onChange={handleInputs} placeholder="Email"/> 
  //               </div>

  //               <div className="form-group">
  //                 <label htmlFor="branch">
  //                 <i class="zmdi zmdi-account-add material-icons-branch"></i>
  //                 </label>
  //                 <input type="text" name="branch" id="branch" autoComplete="off" 
  //                 value={user.branch}
  //                 onChange={handleInputs} placeholder="Branch"/> 
  //               </div>


  //               <div className="form-group">
  //                 <label htmlFor="session">
  //                 <i class="zmdi zmdi-account-add material-icons-session"></i>
  //                 </label>
  //                 <input type="number" name="session" id="session" autoComplete="off" 
  //                 value={user.session}
  //                 onChange={handleInputs} placeholder="Session"/> 
  //               </div>

  //               <div className="form-group">
  //                 <label htmlFor="hostel">
  //                 <i class="zmdi zmdi-account-add material-icons-name"></i>
  //                 </label>
  //                 <input type="text" name="hostel" id="hostel" autoComplete="off" 
  //                 value={user.hostel}
  //                 onChange={handleInputs} placeholder="Hostel"/> 
  //               </div>

  //               <div className="form-group">
  //                 <label htmlFor="roomNo">
  //                 <i class="zmdi zmdi-account-add material-icons-name"></i>
  //                 </label>
  //                 <input type="password" name="roomNo" id="roomNo" autoComplete="off" 
  //                 value={user.roomNo}
  //                 onChange={handleInputs} placeholder="Room No"/> 
  //               </div>

  //               <div className="form-group">
  //                 <label htmlFor="role">
  //                 <i class="zmdi zmdi-role material-icons-name"></i>
  //                 </label>
  //                 <input type="text" name="role" id="role" autoComplete="off" 
  //                 value={user.role}
  //                 onChange={handleInputs} placeholder="Role"/> 
  //               </div>
  //               <Button className={styles.button} onClick={ClickHandler}>Submit</Button>
  //             </form>
  //           </div>
            
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // )
  // };
  return (<div className="wrapper rounded bg-white">
              <div className="h3">Add New User</div>
                  <div className="form">
                    <div className="row">
                       <div className="name-AddNewUser">
                         <label><b>Name</b></label>
                         <input type="text" className="form-AddNewUser" name="name" value={user.name} onChange={handleInputs} required/>
                       </div>
                       <div className="coln-AddNewUser">
                         <label><b>Roll Number</b></label>
                         <input type="text" className="form-AddNewUser" name="rollNo" value={user.rollNo} onChange={handleInputs} required/>
                       </div>
                       <div className="coln-AddNewUser">
                         <label><b>Mobile Number</b></label>
                         <input type="text" className="form-AddNewUser" name="mobileNo" value={user.mobileNo} onChange={handleInputs} required/>
                       </div>
                       <div className="coln-AddNewUser">
                         <label><b>Email</b></label>
                         <input type="text" className="form-AddNewUser" name="email" value={user.email} onChange={handleInputs} required/>
                       </div>
                       <div className="coln-AddNewUser">
                         <label><b>Branch</b></label>
                         <input type="text" className="form-AddNewUser" name="branch" value={user.branch} onChange={handleInputs} required/>

                       </div>
                       <div className="coln-AddNewUser">
                          <label><b>Session</b></label>
                          <input type="text" className="form-AddNewUser" name="session" value={user.session} onChange={handleInputs} required/>
                       </div>
                       <div className="coln-AddNewUser">
                         <label><b>Hostel</b></label>
                         <input type="text" className="form-AddNewUser" name="hostel" value={user.hostel} onChange={handleInputs} required/>
                       </div>
                       <div className="coln-AddNewUser">
                         <label><b>Room Number</b></label>
                         <input type="text" className="form-AddNewUser" name="roomNo" value={user.roomNo} onChange={handleInputs} required/>
                       </div>
                       <div className="coln-AddNewUser">
                         <label><b>Role</b></label>
                         <input type="text" className="form-AddNewUser" name="role" value={user.role} onChange={handleInputs} required/>
                         <Button className={styles.button} onClick={ClickHandler}>Submit</Button>
                       </div>
                       
                       </div>
                       
              </div>
          </div>

)};

export default AddNewUser;
