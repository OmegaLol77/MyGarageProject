import React, { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.css";
import CustomerService from "./CustomerService";
import { useHistory} from "react-router-dom";


export default function Login() {  
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    
    let history =useHistory();

    const ver=e=>{
        e.preventDefault();
        var x=true
        CustomerService.CheckCustomer(Email,Password).then( props => {props==true ? history.push("/"): alert("You are not a customer please Sign-up")}).catch();

        }

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
        doesn't have an account <a href="./SignUp" style={{color:"blue"}} >Signup</a>
        <br></br>
        <button type="submit" onClick={ver} >Submit</button>

        </form>


        
  )
  
}

