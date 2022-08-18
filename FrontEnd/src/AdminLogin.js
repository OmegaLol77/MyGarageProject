import React, { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.css";
import AdminService from "./AdminService";
import WorkerService from "./WorkerService";
import { useHistory} from "react-router-dom";


export default function Login() {  
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const [WorkerOrAdmin,setWorkerOrAdmin] = useState(false);
    let history =useHistory();


    const handleChange=()=>{
        setWorkerOrAdmin(current =>!current);
    }
    const ver=e=>{
        e.preventDefault();
       if(WorkerOrAdmin==true){

        WorkerService.CheckWorker(Email,Password).then( props => {props==true ? history.push("/"): alert("You are not an Worker!")}).catch();
       }
       else{
        AdminService.CheckAdmin(Email,Password).then( props => {props==true ? history.push("/"): alert("You are not an Admin!")}).catch();
       }
        
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
        <label>  Worker<input type="checkbox" value={WorkerOrAdmin}  name=""  onChange={ handleChange}  /></label>
        <br></br>
        <button type="submit" onClick={ver} >Submit</button>



        </form>


        
  )
  
}

