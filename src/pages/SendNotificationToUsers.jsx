import {Button,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import styles from '../myStyles.module.css';

function Send(){
    alert('Notification Sent');
}
function Schedule(){
    alert('Notification Scheduled');
}
const SendNotificationToUsers = ()=>{
    const [user,setUser]=useState({
        notification:""
   });
   const handleInputs = (e) => {
        console.log(e);
        const{name,value} = e.target;
        setUser({ ...user, [name]:value });
   }
    return (
        <div className="user-detail">
            <div>
                <h4>SEND NOTIFICATION:</h4>
                
            </div>
            <div>
              <label for= "select year"><b>Select Year:</b></label><br />
                <input type="checkbox" /> I
                <input type="checkbox" /> II
                <input type="checkbox" /> III 
                <input type="checkbox" /> IV <br /> 
                <label for= "select hostel"><b>Select Hostel:</b></label><br />  
                <input type="checkbox" /> BH-1
                <input type="checkbox" /> BH-2
                <input type="checkbox" /> BH-3 
                <input type="checkbox" /> GH 
            </div>
            {/* <label>
                 <input className="input-text" type="text" placeholder=" enter a message" />
                 
                
            </label> */}
            <br/>
            <Form className="form">
                <Form.Group>
                    <Form.Label>Enter message:</Form.Label>
                    <Form.Control type="text" name="notification" value={user.notification} onChange={handleInputs} placeholder="Enter a message" />

                </Form.Group>
            </Form>
            <br></br>
            
          
           {/* <button className="login-btn"  >SEND</button> 
           <button className="login-btn"  >SCHEDULE</button> */}
           {/* <Button > Send </Button>
           <br></br>
           <Button > Schedule </Button> */}
           
           <div>
            <Button className={styles.button} onClick={Send}>
                Send
            </Button>
           </div>
           <div>
            <Button className={styles.button} onClick={Schedule}>
                Schedule
            </Button>
           </div>
        </div>
    )
};

export default SendNotificationToUsers;