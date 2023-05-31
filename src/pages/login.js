import React,{ useState } from "react";
import "./login.css";

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [isLogin,setisLogin]=useState(0);

const[staff,setstaff]=useState([]);
    const login = async ()=>{
      console.log("data",email,password);
      let item={
        email:email,
        password:password};
      let result=await fetch('/staff',{
        method:'GET',
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
      });
      const data=await result.json();
      if(data){
         setstaff(data.data);
        staff.map((stf)=>{
          console.log(stf.email,stf.password);
          if(stf.email == email && stf.password == password){
          setisLogin(1);
          console.log(isLogin);
          }
        })
       // console.log(isLogin);
        if(isLogin === 1){
          alert('User loggedIn successfully');
          document.getElementsByClassName("login-home").display="none";
          document.getElementsByClassName("sidebar").display="none";
        }else{
          alert("Invalid credential");
        }
      }
      localStorage.setItem('user-info',JSON.stringify(result)); 
    }
    return(
      <>
     
    <div className="login">
      {/* <h1>Login</h1> */}
      <img className="login-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTwnmjjYqep6zgprV4qySbc2iy583aqqN9t11aiH4oHw&s" alt="login-icon"/>
      <input type="text" name="email"  onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter your Email" required/>
      <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" required/>

      <div className="button"  onClick={login}>Login</div>
    </div>
    </>
  )
}

export default Login;