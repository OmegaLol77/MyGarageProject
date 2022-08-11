import React, { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CustomerService from "./CustomerService";
import { useHistory} from "react-router-dom";
import AdminService from "./AdminService";
import WorkerService from "./WorkerService";
import { Redirect } from 'react-router-dom';



export default function Login() {  
    const [phoneNum,setphoneNum] = useState("");
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

    function signupClick(){
        history.push("/SignUp")

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
            AdminService.CheckAdmin(phoneNum,Password).then( props => {props==true ? history.push("/AdminCarList"): alert("You are not an Admin!")}).catch();
        }
        else if(Worker==true){
            console.log("Admin "+Admin)
            console.log("worker " +Worker)
            WorkerService.CheckWorker(phoneNum,Password).then( props => {props==true ? history.push("/WorkerCarList"): alert("You are not an Worker!")}).catch();
        } 
        else{
            localStorage.setItem("Cphonenum",phoneNum)
            console.log(localStorage.getItem("Cphonenum"))
            CustomerService.CheckCustomer(phoneNum,Password).then( props => {props==true ? history.push("/CustomerCarList"): alert("You are not a customer please Sign-up")}).catch();
        }
    }

    return(
        <form className="Login">
        <h1>Login</h1>
        <a>phoneNum:
        <br></br>
            <input type="text" id="phoneNum" placeholder="Your phoneNum" value={phoneNum} onChange={ (e) => setphoneNum(e.target.value)}></input>
        </a>
        <br></br><br></br>
        <a>Password:
            <br></br>
            <input type="password" id="Password" placeholder="Your Password" value={Password} onChange={ (e) => setPassword(e.target.value)}></input>
        </a>
        <br></br>
        doesn't have an account <button onClick={signupClick} >Signup</button> 
        <br></br>
      <label>  Worker<input type="checkbox" value={Worker}  name=""  onChange={ handleWorkerChange}  /></label>
      <label>  Admin<input type="checkbox" value={Admin}  name=""  onChange={ handleAdminChange}  /></label>
      <br></br>
        <button type="submit" onClick={ver} >Submit</button>
        </form>
  )
  
}

 