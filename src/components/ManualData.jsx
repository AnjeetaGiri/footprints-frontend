import React from "react";  
const data = {date_time: "17/12/2022, 10AM" , doneby:"uId", place: "churk", mobileNo: 9919289304,makedone: "make change"} 
const ManualData =() =>{
     return(
        <div className="data">  
         <table>
             <thead>
                <tr>
                   <th>Date/Time</th>
                   <th>DoneBy</th>
                   <th>Place</th>
                   <th>Mobile Number</th>
                   <th>Make Done</th>
                </tr>
             </thead>
             <tbody>
              {
                data.map((value, key)=>{
                    return(
                         <tr key={key}>
                              <td>{value.date_time}</td>
                              <td>{value.doneby}</td>
                              <td>{value.place}</td>
                              <td>{value.mobileNo}</td>
                              <td>{value.makedone}</td>
                         </tr>
                    )
               })
             }
           </tbody>
       </table> 
    </div> 
)};

export default ManualData;
            
          

    