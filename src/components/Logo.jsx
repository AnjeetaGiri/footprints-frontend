import React from "react";
import {FaBars} from 'react-icons/fa'
import './Logo.css';
 const Toolbar = ({openSidebar})=>{
   
    return(
        <div className="main-containers">
            <div className='top_section'>
                <div className="bars">
                  <FaBars onClick={openSidebar}/>
               </div>
               <h1 className='logo'>Rajkiya Engineering College, Sonbhadra, Digital Register Dashboard</h1>
        
           </div>
        </div>
    )
 }
 export default Toolbar;