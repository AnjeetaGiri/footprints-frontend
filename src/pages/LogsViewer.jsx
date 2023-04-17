import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import styles from '../myStyles.module.css';
import Late from './Late.jsx';


const LogsViewer = ()=>{
  const [user,setUser]=useState("");


const handleInputs = (e) => {
    console.log(e);
    const{name,value} = e.target;
    setUser({ ...user, [name]:value });
}
const renderTable=()=>{
  const[table,setTable]=useState("")
}
  return (
    <div className="user-detail">
             <div>
               <h2>30 DAYS LOGS</h2>
             </div>
        <label>
             <input className="input-text" type="text" name="viewLog" value={user.viewLog} onChange={handleInputs} placeholder="Enter userId" /><br />
        </label>
        <br/>
       <Button className={styles.button} onClick={()=>setUser} >Find</Button>
       {/* <div className="Late">
        <Late/>
       </div> */}
         
    </div>
)
};
export default LogsViewer;