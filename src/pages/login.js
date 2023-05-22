import React,{ useState } from "react";
import "./login.css";


const Login = () => {
    const [user,setUser]=useState({
        email:"",
        password:"",
      })
      const handleChange=e=>{
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
      }
  return (
    <div className="login">
      {console.log("User",user)}
      <h1>Login</h1>
      <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter your name"></input>
      <input type="text" name="role" value={user.role} onChange={handleChange} placeholder="Enter your role"></input>
      <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
      <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your password"></input>

      <div className="button">Login</div>
      <div>or</div>
      <div className="button">Register</div>
    </div>
  )
}

export default Login