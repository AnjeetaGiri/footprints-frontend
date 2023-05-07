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
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  // const PostData = async(e)=>{
  //     e.preventDefault();
  //     const{ name, rollNo, mobileNo, email, branch, session, hostel, roomNo, role }=user;
  // }
  return (
    <div className="wrapper rounded bg-white">
      <div className="box">
        <form>
          <div className="h3">Add New User</div>

          <div className="row">
            <div className="col-25">
              <label>Name</label>
            </div>
            <div className="col-75">
              <input
                className="input-AddNewUsertype"
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputs}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Roll No.</label>
            </div>
            <div className="col-75">
              <input
                type="number"
                className="input-AddNewUsertype"
                name="rollNo"
                value={user.rollNo}
                onChange={handleInputs}
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
                type="number"
                className="input-AddNewUsertype"
                name="mobileNo"
                value={user.mobileNo}
                onChange={handleInputs}
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
                className="input-AddNewUsertype"
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputs}
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
                className="input-AddNewUsertype"
                type="text"
                name="branch"
                value={user.branch}
                onChange={handleInputs}
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
                className="input-AddNewUsertype"
                type="text"
                name="session"
                value={user.session}
                onChange={handleInputs}
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
                className="input-AddNewUsertype"
                type="text"
                name="hostel"
                value={user.hostel}
                onChange={handleInputs}
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
                className="input-AddNewUsertype"
                type="text"
                name="roomNo."
                value={user.roomNo}
                onChange={handleInputs}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Role</label>
            </div>
            <div className="col-75">
              <input
                className="input-AddNewUsertype"
                type="text"
                name="role"
                value={user.role}
                onChange={handleInputs}
                required
              />
            </div>
            <Button className={styles.button} onClick={ClickHandler}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewUser;
