import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './AddNewUser.css';
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
  //     <section classNrow">
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
  //                 <input className="input-AddNewUsertype" type="text" 
  //                 name="name" id="name" 
  //                 autoComplete="off"
  //                 value={user.name}
  //                 onChange={handleInputs} placeholder="Name"/> 
  //               </div>

  //               <div className="form-group">
  //                 <label htmlFor="rollNo">
  //                 <i class="zmdi zmdi-account-add material-icons-rollNo"></i>
  //                 </label>
  //                 <input className="input-AddNewUsertype" type="number" name="rollNo" id="rollNO" autoComplete="off"
  //                 value={user.rollNo}
  //                 onChange={handleInputs} placeholder="Roll No"/> 
  //               </div>

  //               <div className="form-group">
  //                 <label htmlFor="mobileNo">
  //                 <i class="zmdi zmdi-account-add material-icons-mobileNo"></i>
  //                 </label>
  //                 <input className="input-AddNewUsertype" type="number" name="mobileNo" id="mobileNo" autoComplete="off" 
  //                 value={user.mobileNo}
  //                 onChange={handleInputs}placeholder="Mobile No"/> 
  //               </div>

  //               <div className="form-group">
  //                 <label htmlFor="email">
  //                 <i class="zmdi zmdi-account-add material-icons-name"></i>
  //                 </label>
  //                 <input className="input-AddNewUsertype" type="email" name="email" id="email" autoComplete="off" 
  //                 value={user.email}
  //                 onChange={handleInputs} placeholder="Email"/> 
  //               </div>

  //               <div className="form-group">
  //                 <label htmlFor="branch">
  //                 <i class="zmdi zmdi-account-add material-icons-branch"></i>
  //                 </label>
  //                 <input className="input-AddNewUsertype" type="text" name="branch" id="branch" autoComplete="off" 
  //                 value={user.branch}
  //                 onChange={handleInputs} placeholder="Branch"/> 
  //               </div>


  //               <div className="form-group">
  //                 <label htmlFor="session">
  //                 <i class="zmdi zmdi-account-add material-icons-session"></i>
  //                 </label>
  //                 <input className="input-AddNewUsertype" type="number" name="session" id="session" autoComplete="off" 
  //                 value={user.session}
  //                 onChange={handleInputs} placeholderSession
  //               </div>

  //               <div className="form-group">
  //                 <label htmlFor="hostel">
  //                 <i class="zmdi zmdi-account-add material-icons-name"></i>
  //                 </label>
  //                 <input className="input-AddNewUsertype" type="text" name="hostel" id="hostel" autoComplete="off" 
  //                 value={user.hostel}
  //                 onChange={handleInputs} placeholder="Hostel"/> 
  //               </div>

  //               <div className="form-group">
  //                 <label htmlFor="roomNo">
  //                 <i class="zmdi zmdi-account-add material-icons-name"></i>
  //                 </label>
  //                 <input className="input-AddNewUsertype" type="password" name="roomNo" id="roomNo" autoComplete="off" 
  //                 value={user.roomNo}
  //                 onChange={handleInputs} placeholder="Room No"/> 
  //               </div>

  //               <div className="form-group">
  //                 <label htmlFor="role">
  //                 <i class="zmdi zmdi-role material-icons-name"></i>
  //                 </label>
  //                 <input className="input-AddNewUsertype" type="text" name="role" id="role" autoComplete="off" 
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
              
                   <div className="box">
                    <form>
                    <div className="h3">Add New User</div>
                       <div className="row">
                         <div className="col-25">
                         <label>Name</label>
                         </div>
                         <div className="col-75">
                         <input className="input-AddNewUsertype" type="text" name="name" value={user.name} onChange={handleInputs} required/>
                         </div> 
                       </div>
                       <div className="row">
                       <div className="col-25">
                         <label>Roll No.</label>
                         </div>
                         <div className="col-75">
                         <input className="input-AddNewUsertype" type="text"  name="roll No." value={user.rollNo} onChange={handleInputs} required/>
                         </div>
                       </div>
                       <div className="row">
                       <div className="col-25">
                         <label>Mobile No.</label>
                         </div>
                         <div className="col-75">
                         <input className="input-AddNewUsertype" type="text"  name="mobile No." value={user.mobileNo} onChange={handleInputs} required/>
                         </div>
                       </div>
                       <div className="row">
                       <div className="col-25">
                         <label>Email</label>
                         </div>
                         <div className="col-75">
                         <input className="input-AddNewUsertype" type="email"  name="email" value={user.email} onChange={handleInputs} required/>
                         </div>
                       </div>
                       <div className="row">
                       <div className="col-25">
                         <label>Branch</label>
                         </div>
                         <div className="col-75">
                         <input className="input-AddNewUsertype" type="text" name="branch" value={user.branch} onChange={handleInputs} required/>
                         </div>

                       </div>
                       <div className="row">
                       <div className="col-25">
                         <label>Session</label>
                         </div>
                         <div className="col-75">
                         <input className="input-AddNewUsertype" type="text" name="session" value={user.session} onChange={handleInputs} required/>
                         </div>
                       </div>
                       <div className="row">
                       <div className="col-25">
                         <label>Hostel</label>
                         </div>
                         <div className="col-75">
                         <input className="input-AddNewUsertype" type="text" name="hostel" value={user.hostel} onChange={handleInputs} required/>
                         </div>
                       </div>
                       <div className="row">
                       <div className="col-25">
                         <label>Room No.</label>
                         </div>
                         <div className="col-75">
                         <input className="input-AddNewUsertype" type="text" name="roomNo." value={user.roomNo} onChange={handleInputs} required/>
                         </div>
                       </div>
                       <div className="row">
                       <div className="col-25">
                         <label>Role</label>
                         </div>
                         <div className="col-75">
                         <input className="input-AddNewUsertype" type="text" name="role" value={user.role} onChange={handleInputs} required/>
                         </div>
                         <Button className={styles.button} onClick={ClickHandler}>Submit</Button>
                        </div>
                      
                       </form>
                       </div> 
                       
          </div>
  

)};

export default AddNewUser;
