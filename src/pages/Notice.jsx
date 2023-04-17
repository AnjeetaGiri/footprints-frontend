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

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
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

          {/* <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <h3>Select Branch</h3>
            <hr />
            <input type="checkbox" /> CSE
            <br />
            <input type="checkbox" /> EE
            <br />
            <input type="checkbox" /> EL
          </div> */}
        </div>
      </div>
      <div className="text-box">
        <div className="form-group">
          <label for="myBox">Enter your message here:</label>
          <textarea className="form-control" id="myBox" rows="7"></textarea>
        </div>
      </div>

      <button type="button" className="b1">
        Send
      </button>
      <button type="button" className="b2">
        {/* <DemoItem
          label={'"year"", "month", "day", "hours", "minutes" and "seconds"'}
        >
          <DateTimePicker
            views={["year", "month", "day", "hours", "minutes", "seconds"]}
          />
        </DemoItem>
        <DemoItem label={'"day", "hours"'}>
          <DateTimePicker views={["day", "hours"]} />
        </DemoItem>
        <DemoItem label={'"year", "day", "hours", "minutes", "seconds"'}>
          <DateTimePicker
            views={["year", "day", "hours", "minutes", "seconds"]}
          />
        </DemoItem> */}
        {/* <DatePicker/> */}
      </button>
      {/* <DemoItem
        label={'"year"", "month", "day", "hours", "minutes" and "seconds"'}
      >
        

      {/* </div>
      </div> */}
      {/* <div>
        <div class="row">
          <div class="col">
          </div>
          <div class="col">
          </div>
        </div>
        <label for="select year">
          <b>Select Year:</b>
        </label>
        <br />
        <input type="checkbox" /> I<br />
        <input type="checkbox" /> II
        <br />
        <input type="checkbox" /> III
        <br />
        <input type="checkbox" /> IV <br />
        <label for="select year">
          <b>Select Hostel:</b>
        </label>
        <br />
        <input type="checkbox" /> BH-1
        <input type="checkbox" /> BH-2
        <input type="checkbox" /> BH-3
        <input type="checkbox" /> GH
      </div>
      <label>
        <input className="notice" type="text" placeholder="Enter a message" />
        <br />
      </label>
      <br /> */}
      {/* <Button className={styles.button}>SEND</Button>
      <br />
      <Button className={styles.button}>SCHEDULE</Button>
      {/* <input className="datetime" type="datetime-local" id="schedule"/> */}

      {/* </DateTimePickerComponent> */}
    </div>
  );
};

export default Notice;
