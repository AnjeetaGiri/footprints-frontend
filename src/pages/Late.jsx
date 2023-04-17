import React from 'react';
import './Late.css';

const data=[
    {rollno:"1908410100011",date:"10/05/2023",doneBy:"Anjeeta",place:"Churk",out:'9.35 AM'},
    {rollno:"1908410100011",date:"10/05/2023",doneBy:"Anjeeta",place:"Churk",out:'9.35 AM'},
    {rollno:"1908410100011",date:"10/05/2023",doneBy:"Anjeeta",place:"Churk",out:'9.35 AM'},
]
export default function Late() {
  return (
    <div className="table">
        <table>
            <thead>
                <th data-label="userID">UserID</th>
                <th data-label="date/time">Date/Time</th>
                <th data-label="doneBy">Done By</th>
                <th data-label="place">Place</th>
                <th data-label="out/in">Out/In</th>
            </thead>
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
                            </tr>
                        )
                    })
                }
            </tbody>
            
        </table>
      
    </div>
  )
}
