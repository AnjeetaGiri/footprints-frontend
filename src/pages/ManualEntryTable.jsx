import React,{useState} from 'react';
import './Late.css';

const data=[
    {user_id:"1908410100005",place:"Churk",outTime:'10.35 AM',inTime:'3:00 PM',inOutStat:'In',purpose:"Shopping"}
    // {rollno:"1908410100005",date:"15/05/2023",doneBy:"Akarshit",place:"Robertsganj",out:'10.35 AM',changes:""},
    // {rollno:"1908410100001",date:"15/05/2023",doneBy:"Abhimanyu",place:"Home",out:'8.45 AM',changes:""},
    // {rollno:"1908410100011",date:"15/05/2023",doneBy:"Anjeeta",place:"Churk",out:'7.54 AM',changes:""},
]
export default function Late() {
  const [state,setState]=useState(false);
  const toggle=()=>{
    setState(!state);
  }
  return ( 
    <div className="table-box">
        <table>
            <tr>
                <th>User ID</th>
                <th>Place</th>
                <th>OutTime</th>
                <th>InTime</th>
                <th>Status</th>
                <th>Purpose</th>
            </tr>
            <tbody>
                {data.map((value,key)=>{
                        return(
                            <tr key={key}>
                                <td>{value.user_id}</td>
                                <td>{value.place}</td>
                                <td>{value.outTime}</td>
                                <td>{value.inTime}</td>
                                <td>{value.inOutStat}</td>
                                <td>{value.purpose}</td>
                                {/* <td>{value.changes}</td> */}
                                {/* <td><button onClick={toggle} className={'toggle--button'+(state?'toggle--in':'')}> {state?'in':'out'}</button></td> */}
                            </tr>)
                    })}
            </tbody>
            
        </table>
      
    </div>
  )
}