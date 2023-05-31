import React, { useState } from "react";
import "./Notice.css";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Notice = () => {
  const [checkboxValues, setCheckboxValues] = useState([]);

  const [toggleState, setToggleState] = useState(1);
  const [Message, setMessage] = useState("");
  const [notice, setnotice] = useState({
    user_id: "123456",
    message: "",
    receiver: "",
    date_time: "",
  });

  const toggleTab = (e, index) => {
    e.preventDefault();
    setToggleState(index);
  };

  function handle(e) {
    const newdata = { ...notice };
    newdata[e.target.name] = e.target.value;
    setnotice(newdata);
    console.log(newdata);
  }
  function sendNotice(e) {
    e.preventDefault();
    const url = "/notice";
    checkboxValues.map((val) => {
      Axios.post(url, {
        user_id: notice.user_id,
        message: notice.message,
        date_time: notice.date_time,
        receiver: val,
      })
        .then((res) => {
          console.log(res);

          if (res.status === 201) {
            const newdata = {
              user_id: "",
              message: " ",
              receiver: "",
              date_time: "",
            };
            setnotice(newdata);
            setMessage("Notice sent successfully");
            alert("Notice sent successfully");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheckboxValues((prevValues) => [...prevValues, value]);
    } else {
      setCheckboxValues((prevValues) =>
        prevValues.filter((val) => val !== value)
      );
    }
  };

  return (
    <form onSubmit={(e) => sendNotice(e)}>
      <div className="send-notice">
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={(e) => toggleTab(e, 1)}
            >
              <b>Select Year & Branch</b>
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={(e) => toggleTab(e, 2)}
            >
              <b>Select Hostel</b>
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <div className="year">
                <input
                  type="checkbox"
                  value="2020"
                  onChange={handleCheckboxChange}
                  checked={checkboxValues.includes("2020")}
                />{" "}
                I
                <br />
                <input
                  type="checkbox"
                  value="2021"
                  onChange={handleCheckboxChange}
                  checked={checkboxValues.includes("2021")}
                />{" "}
                II
                <br />
                <input
                  type="checkbox"
                  value="2022"
                  onChange={handleCheckboxChange}
                  checked={checkboxValues.includes("2022")}
                />{" "}
                III
                <br />
                <input
                  type="checkbox"
                  value="2023"
                  onChange={handleCheckboxChange}
                  checked={checkboxValues.includes("2023")}
                />{" "}
                IV
              </div>

              <div className="branch">
                <input
                  type="checkbox"
                  value="CSE"
                  onChange={handleCheckboxChange}
                  checked={checkboxValues.includes("CSE")}
                />{" "}
                CSE
                <br />
                <input
                  type="checkbox"
                  value="EE"
                  onChange={handleCheckboxChange}
                  checked={checkboxValues.includes("EE")}
                />{" "}
                EE
                <br />
                <input
                  type="checkbox"
                  value="EL"
                  onChange={handleCheckboxChange}
                  checked={checkboxValues.includes("EL")}
                />{" "}
                EL
              </div>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <input
                type="checkbox"
                value="BH1"
                onChange={handleCheckboxChange}
                checked={checkboxValues.includes("BH1")}
              />{" "}
              BH-1
              <br />
              <input
                type="checkbox"
                value="BH2"
                onChange={handleCheckboxChange}
                checked={checkboxValues.includes("BH2")}
              />{" "}
              BH-2
              <br />
              <input
                type="checkbox"
                value="BH3"
                onChange={handleCheckboxChange}
                checked={checkboxValues.includes("BH3")}
              />{" "}
              BH-3
              <br />
              <input
                type="checkbox"
                value="GH1"
                onChange={handleCheckboxChange}
                checked={checkboxValues.includes("GH1")}
              />{" "}
              GH
            </div>
          </div>
        </div>
        <div className="text-box">
          <div className="form-group">
            <label className="label-notice" for="myBox"></label>
            <textarea
              className="form-control myBox"
              name="message"
              rows="7"
              onChange={(e) => handle(e)}
              value={notice.message}
              placeholder="Enter your message here"
            ></textarea>
          </div>
          <div className="btn-notice">
            <button type="button" className="b1" onClick={(e) => sendNotice(e)}>
              Send
            </button>
            <button type="button" className="b2">
              <label for="dateTimePick">Schedule</label>
              <input
                type="datetime-local"
                id="dateTimePick"
                name="date_time"
                onChange={(e) => handle(e)}
                value={notice.date_time}
              ></input>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Notice;

// function DatePick() {
//   const [date, setDate] = useState();
//   console.log("Date", date);
//   return (
//     <div className="input-date">
//       <h1>Select Date:{date}</h1>
//       <input type="date" onChange={(e) => setDate(e.target.value)} />
//     </div>
//   );
// }
//  newdata.receiver= checkboxValues.join(',');
