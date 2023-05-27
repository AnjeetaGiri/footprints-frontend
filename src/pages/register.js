import React,{ useState } from "react";
import "./register.css";
import axios from "axios";

const Register = () => {
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        role:""
      })
      const handleChange=e=>{
        const { name,value }=e.target
        setUser({
            ...user,
            [name]:value
        })
      }
      const register=()=>{
        const { name, email, password, reEnterPassword }= user
        if(name && email && (password===reEnterPassword)){
            axios.post("http://localhost:9002/register",user)
            .then(res=>console.log(res)) //It is a promise based request. If the psot requested,
            // then only this line will get executed.
            // alert("posted")
        }
        else{
            alert("Invalid Input")
        }
        
      }
    return (
    <div className="register">
      {console.log("User",user)}
      <h1>Register</h1>
      <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Create password"></input>
      <input type="password" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} placeholder="Re-enter password"></input>
      <div className="button" onclick={register}>Register</div>
      <div>or</div>
      <div className="button">Login</div>
    </div>
  )
}

export default Register