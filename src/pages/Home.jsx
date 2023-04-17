import React from "react";
import "./Home.css";
// import fakeData from './Mock-data.json'
const Home = () => {
  return (
    <div className="home">
      <div id="UpperBar">
        <div>Item 1</div>
        <div>Item2</div>
        <div>Item 3</div>
      </div>
      <div className="admin">
      
        {/* <table>
                <thead>
                    <tr>
                        <th>Name : Deepak Sigroha</th>
                        <th>Role : Warden</th>
                        <th>Hostel : BH-2</th>
                    </tr>
                </thead>
            </table>  */}
        

      <div className="stDetail">
        {/* <div className="list-students">  */}
        <h4>List of Student haven't returned till 9:00PM</h4>
        {/* </div> */}
        <table>
          <thead>
            <tr>
              <th>Roll.No/ID</th>
              <th>Name</th>
              <th>Branch/Year</th>
              <th>OutTime</th>
              <th>Place</th>
              <th>In/Out</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Abhimanyu</td>
              <td>CSE/4th</td>
              <td>9.45AM</td>
              <td>Churk</td>
              <td>Out</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Home;
