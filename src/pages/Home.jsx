import React,{useState} from "react";
import "./Home.css";
import Login from './login'
import Home_Table from "./Home_Table";
import { BiLogIn} from 'react-icons/bi';
const Home = () => {
  const [content, setContent] = useState(<></>);

  const handleClick = (e) => {

    setContent(<Login/>);
  };

    return(
      <div className="Content">
      
      <img src="http://recsonbhadra.ac.in/static/media/Slider1Croped.906e9b1ba1339f022d32.jpg"/>
      <div className="login-home">{content}</div>

      <button className="login-button" onClick={handleClick}><BiLogIn/>Login</button>
      {/* <div className="login-home">{content}</div>      */}
      </div>
    )
};

export default Home;
