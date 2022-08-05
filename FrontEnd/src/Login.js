import React, { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.css";
import CustomerService from "./CustomerService";
import { useHistory} from "react-router-dom";
import AdminService from "./AdminService";
import WorkerService from "./WorkerService";


export default function Login() {  
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const [Worker,setWorker] = useState(false);
    const [Admin,setAdmin] = useState(false);

    let history =useHistory();

    const handleWorkerChange=()=>{

        setWorker(current =>!current);
    }
    const handleAdminChange=()=>{

        setAdmin(current =>!current);
    }




    const ver=e=>{
        e.preventDefault();
        if(Worker==true&&Admin==true){
            alert("Please Only Select One")
           return;
        }
        if(Admin==true){
        console.log("Admin "+Admin)
        console.log("worker " +Worker)

        AdminService.CheckAdmin(Email,Password).then( props => {props==true ? history.push("/carlist"): alert("You are not an Admin!")}).catch();

           }
           else if(Worker==true){
            console.log("Admin "+Admin)

            console.log("worker " +Worker)
            WorkerService.CheckWorker(Email,Password).then( props => {props==true ? history.push("/addcar"): alert("You are not an Worker!")}).catch();

           }
           
           else{
            CustomerService.CheckCustomer(Email,Password).then( props => {props==true ? history.push("/addcar"): alert("You are not a customer please Sign-up")}).catch();
        
           }
        
        }



    return(
        <form className="Login">
        <h1>Login</h1>
        <a>Email:
        <br></br>
            <input type="text" id="Email" placeholder="Your Email" value={Email} onChange={ (e) => setEmail(e.target.value)}></input>
        </a>
        <br></br><br></br>
        <a>Password:
            <br></br>
            <input type="password" id="Password" placeholder="Your Password" value={Password} onChange={ (e) => setPassword(e.target.value)}></input>
        </a>
        <br></br>
        doesn't have an account <a href="./SignUp" style={{color:"blue"}} >Signup</a>
        <br></br>
      <label>  Worker<input type="checkbox" value={Worker}  name=""  onChange={ handleWorkerChange}  /></label>
      <label>  Admin<input type="checkbox" value={Admin}  name=""  onChange={ handleAdminChange}  /></label>

      <br></br>

        <button type="submit" onClick={ver} >Submit</button>



        </form>


        
  )
  
}

 