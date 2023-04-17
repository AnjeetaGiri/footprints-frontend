import React from 'react';
import './Late.css';

const data=[
    {rollno:"1908410100011",date:"10/05/2023",doneBy:"Anjeeta",place:"Churk",out:'9.35 AM',changes:""},
    {rollno:"1908410100011",date:"10/05/2023",doneBy:"Anjeeta",place:"Churk",out:'9.35 AM',changes:""},
    {rollno:"1908410100011",date:"10/05/2023",doneBy:"Anjeeta",place:"Churk",out:'9.35 AM',changes:""},
]
export default function Late() {
  return (
    <div className="table-box">
        <table>
            <tr>
                <th className="userID">UserID</th>
                <th>Date/Time</th>
                <th>Done By</th>
                <th>Place</th>
                <th>Out/In</th>
                <th>Make Changes</th>
            </tr>
            <tbody>
                {
                    data.map((value,key)=>{
                        return(
                            <tr key={key}>
                                <td>{value.rollno}</td>
                                <td>{value.date}</td>
                                <td>{value.doneBy}</td>
                                <td>{value.place}</td>
                                <td>{value.out},{value.in}</td>
                                <td>{value.changes}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            
        </table>
      
    </div>
  )
}