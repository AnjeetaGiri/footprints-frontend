import React from 'react';
import {Outlet} from 'react-router-dom';

const privateroutes = () => {
    let loggedIn=true;
    if(loggedIn){
        return <Outlet/>
    }else{
        return "user is not logged in";
    }
}

export default privateroutes
