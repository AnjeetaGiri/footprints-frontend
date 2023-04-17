import React from 'react';
import {motion} from 'framer-motion';
import './Sidebar.css';
import { FaHome, FaUserEdit, FaUserFriends, FaStreetView} from 'react-icons/fa'
import { BiUserPlus, BiBookmarkAlt, BiLogOut} from 'react-icons/bi'
import { NavLink } from 'react-router-dom';

const routes =[
    {
      path:'/',
      name: 'Home',
      icon: <FaHome/>,
    },
    {
      path:'/FindUserDetails',
      name: 'Find User Details',
      icon: <FaUserFriends/>,
    },
    {
      path:'/MakeManualEntry',
      name: 'Make Manual Entry',
      icon: <FaUserEdit/>,
    },
    {
      path:'/AddNewUser',
      name: 'Add New User',
      icon: <BiUserPlus/>,
    },
    {
      path:'/Notice',
      name: 'Notice',
      icon: <BiBookmarkAlt/>,
    },
    {
      path:'/LogsViewer',
      name: '30 Days logs Viewer',
      icon: <FaStreetView/>,
    },
    // {
    //   path:'/SendNotificationToUsers',
    //   name: 'Send Notification to users',
    //   icon: <BiMessageRoundedDots/>,
    // },
    {
      name: 'Log Out',
      icon: <BiLogOut/>,
    },
];
const Sidebar = ({sidebar,children}) => {
  
    
  return (
    <div className="main-container"> 
      
      <motion.div animate={{ width: sidebar ? "235px" : "55px" , transition:{
        duration: 0.8,
        type: "spring"
      }}} className="sidebar">
     
      {<section className="routes">
          {routes.map((route)=>(
            
            <NavLink activeClassName="active" to={route.path} key={route.name} className='link' > 
              <div className='icon'>{route.icon}</div>
              { sidebar && <div className='link_text'> {route.name}</div>}
            </NavLink>
            
          ))}
      </section>} 
      </motion.div>  
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
