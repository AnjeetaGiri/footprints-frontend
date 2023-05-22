import React,{useState} from "react";
import "./Home_Table.css";
// import fakeData from './Mock-data.json'
const Home_Table = () => {
  const[admin,setAdmin]=useState({
    name:"Deepak Kumar",
    role:"Warden",
    hostel:"BH-2"
  });
  const data=[
    {rollNo:"1908410100011",date:"22/04/2023",doneBy:"Anjeeta",place:"Churk",status:"Out"},
    {rollNo:"1908410100055",date:"23/04/2023",doneBy:"Saumya",place:"Robertsganj",status:"In"},
    {rollNo:"1908410100005",date:"21/05/2023",doneBy:"Akarshit",place:"Home",status:"Out"},
    {rollNo:"1908410100001",date:"15/05/2023",doneBy:"Abhimanyu",place:"Churk",status:"Out"},
  ]
  return (
    <div className="home">
      <div id="UpperBar">
        <div>{admin.name}</div>
        <div>{admin.role}</div>
        <div>{admin.hostel}</div>
      </div>
        {/* <div className="list-students">  */}
        <div className="Heading">
            <h4>List of Student haven't returned till 9:00PM</h4>
        </div>
        
        {/* </div> */}
        {/* <table className="userTable">
          <thead>
            <tr>
                <th data-label="userID">Roll No.</th>
                <th data-label="date/time">Date/Time</th>
                <th data-label="doneBy">Done By</th>
                <th data-label="place">Place</th>
                <th data-label="out/in">Status</th>
            </tr>
          </thead>
          {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.rollNo}</td>
              <td>{val.date}</td>
              <td>{val.doneBy}</td>
              <td>{val.place}</td>
              <td>{val.status}</td>
            </tr>
          )
        })}
        </table> */}
        {/* -------New Code--------- */}
        <table className="userTable">
          <thead>
            <tr>
                <th >Roll No.</th>
                <th >Date/Time</th>
                <th >Done By</th>
                <th >Place</th>
                <th >Status</th>
            </tr>
          </thead>
          {data.map((val, key) => {
          return (
            <tbody>
              <tr key={key}>
              <td data-label="Roll No.">{val.rollNo}</td>
              <td data-label="Date/Time">{val.date}</td>
              <td data-label="Done By">{val.doneBy}</td>
              <td data-label="Place">{val.place}</td>
              <td data-label="Status">{val.status}</td>
            </tr>
            </tbody> 
          )
        })}
        </table>
      </div>
  );
};

export default Home_Table;