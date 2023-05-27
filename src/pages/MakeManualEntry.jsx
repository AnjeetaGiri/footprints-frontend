import React from "react";
import { useState } from "react";
import ManualData from "../components/ManualData";
import "./MakeManualEntry.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../myStyles.module.css";
import ManualEntryTable from "./ManualEntryTable.jsx";


const MakeManualEntry = () => {
  const [content, setContent] = useState(<></>);

  const handleClick = (event) => {
    setContent(<ManualEntryTable />);
  };

  const [enterUserId, setEnterUserId] = useState("");
  const uIdChangeHandelar = (event) => {
    setEnterUserId(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    ManualData();
    const entryData = {
      enterUserId: "",
    };
    console.log(entryData);
    setEnterUserId("");
  };

  return (
    <div onSubmit={submitHandler} className="manual-entry">
      <div>
        <h2>Make Manual Entry</h2>
      </div>
      <label>
        <input
          className="input-text"
          value={enterUserId}
          type="text"
          onChange={uIdChangeHandelar}
          placeholder="Enter userId"
        />
        <br />
      </label>
      <br />
      <Button className={styles.button} onClick={handleClick}>
        SUBMIT
      </Button>

      <div className="detail">{content}</div>
    </div>
  );
};

export default MakeManualEntry;













