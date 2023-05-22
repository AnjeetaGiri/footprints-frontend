import React from "react";
import {FaBars} from 'react-icons/fa'
import './Logo.css';
 const Toolbar = ({openSidebar})=>{
   
    return(
        <div className="main-containers">
            <div className='top_section'>
                <div className="bars">
                  <FaBars onClick={openSidebar}/>
                  {/* src= */}
                  </div>
                  <div className="title_rec">
                  <img className="REC_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTwnmjjYqep6zgprV4qySbc2iy583aqqN9t11aiH4oHw&s"/>
                  <h6 className='logo'>Rajkiya Engineering College, Sonbhadra, Digital Register Dashboard</h6>
                  
                  </div>
                  
               </div>
        </div>
    )
 }
 export default Toolbar;