import React, { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.css";

export default function Login() {  
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");



    const ver=e=>{
        e.preventDefault();
        console.log(Email);
        console.log(Password);
    //    check if the user and password are right in the DB if yes continue to home
    };

    return(
        <form className="Login">
        <h1>Login</h1>
        <a>Email:
        <br></br>
            <input type="text" id="Email" placeholder="Your Email" value={Email} onChange={ (e) => setEmail(e.target.value)}>
            
            </input>
        </a>
        <br></br><br></br>
        <a>Password:
            <br></br>
            <input type="password" id="Password" placeholder="Your Password" value={Password} onChange={ (e) => setPassword(e.target.value)}> 
            
            </input>
        </a>
        <br></br>
        <br></br>
        doesn't have an account <a href="./AddCar" style={{color:"blue"}} >Signup</a>
        <br></br>
        <button type="submit" onClick={ver} >Submit</button>

        </form>


        
  )
  
}

