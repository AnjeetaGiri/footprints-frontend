import React,{ useState } from "react";
import "./login.css";

const Login = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [isLogin,setisLogin]=useState(0);
const[staff,setStaff]=useState([]);
    const login = async ()=>{
      console.warn("data",email,password);
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
      result=await result.json();
      if(result){
         setStaff(result.data);
         console.log(result.data);
        staff.map((stf)=>{
          if(stf.email === email && stf.password === password){
          // console.log(stf.email);
          // console.log(stf.password);
          setisLogin(1);
                    }
        })
       // console.log(isLogin);
        if(isLogin === 1){
          alert('User loggedIn successfully');
        }else{
          alert("Invalid credential");
        }
      }
      localStorage.setItem('user-info',JSON.stringify(result)); 
    }
    return(
    <div className="login">
      <h1>Login</h1>
      <input type="text" name="email"  onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter your Email" required/>
      <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" required/>

      <div className="button"  onClick={login}>Login</div>
    </div>
  )
}

export default Login;