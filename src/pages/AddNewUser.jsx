import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./AddNewUser.css";
import styles from "../myStyles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
const AddNewUser = () => {
  const [inputs, setInputs] = useState({
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    // const { name, value } = e.target;
    // setUser({ ...user, [name]: value });
  };


  //-------------Till Here--------------------



  return (
    <div className="wrapper rounded bg-white">
      <div className="box">
        <form onSubmit={handleSubmit}>
          <div className="h3">Add New User</div>

          <div className="row">
            <div className="col-25">
              <label>Name</label>
            </div>
            <div className="col-75">
              <input
                className="input-AddNewUsertype"
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
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
                value={inputs.rollNo || ""}
                onChange={handleChange}
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
                value={inputs.mobileNo || ""}
                onChange={handleChange}
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
                value={inputs.email || ""}
                onChange={handleChange}
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
                value={inputs.branch || ""}
                onChange={handleChange}
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
                value={inputs.session || ""}
                onChange={handleChange}
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
                value={inputs.hostel || ""}
                onChange={handleChange}
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
                name="roomNo"
                value={inputs.roomNo || ""}
                onChange={handleChange}
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
                value={inputs.role || ""}
                onChange={handleChange}
                required
              />
            </div>
            <input type="submit" />
            {/* <Button className={styles.button}>
              Submit
            </Button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewUser;
