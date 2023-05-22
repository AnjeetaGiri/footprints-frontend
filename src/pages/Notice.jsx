import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Notice.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../myStyles.module.css";
// import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from "@mui/x-date-pickers";

const Notice = () => {
  // const dateValue: Date=new Date("30/03/2023 10:30 AM");
  // const minDate: Date=new Date("")
  // const state={
  //   value:"Write your message here"
  // };
  // const handleChange=e=>{
  //   this.setState({value:e.target.value})
  // };
  const [selectedDate, setSelectedDate] = useState(null);
  const [toggleState, setToggleState] = useState(1);
  const [message,setMessage]=useState(" ")

  const toggleTab = (index) => {
    setToggleState(index);
  };
  function DatePick() {
    const [date, setDate] = useState();
    console.log("Date", date);
    return (
      <div className="input-date">
        <h1>Select Date:{date}</h1>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
      </div>
    );
  }
  return (
    <form>
    <div className="user-detail">
      {/* <h2>Send Notice:</h2> */}
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <b>Select Year & Branch</b>
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            <b>Select Hostel</b>
          </button>
          {/* <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            <b>Branch</b>
          </button> */}
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div className="year">
              <input type="checkbox" /> I<br />
              <input type="checkbox" /> II
              <br />
              <input type="checkbox" /> III
              <br />
              <input type="checkbox" /> IV
            </div>

            <div className="branch">
              <input type="checkbox" /> CSE
              <br />
              <input type="checkbox" /> EE
              <br />
              <input type="checkbox" /> EL
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <input type="checkbox" /> BH-1
            <br />
            <input type="checkbox" /> BH-2
            <br />
            <input type="checkbox" /> BH-3
            <br />
            <input type="checkbox" /> GH
          </div>
        </div>
      </div>
      <div className="text-box">
        <div className="form-group">
          <label className="label-notice" for="myBox">
            Enter your message here:
          </label>
          <textarea className="form-control" id="myBox" rows="7"></textarea>
        </div>
        <div className="btn-notice">
          <button type="button" className="b1">
            Send
          </button>
          <button type="button" className="b2">
            <label for="dateTimePick">Schedule</label>
            <input
              type="datetime-local"
              id="dateTimePick"
              name="dateTimePick"
            ></input>
          </button>
        </div>
      </div>
    </div>
    </form>
  );
};

export default Notice;
