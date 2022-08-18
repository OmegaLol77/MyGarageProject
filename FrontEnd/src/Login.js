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
    const [Customer,setCustomer] = useState(false);

    let history =useHistory();

    const handleWorkerChange=()=>{
        setWorker(current =>!current);
    }

    const handleAdminChange=()=>{
        setAdmin(current =>!current);
    }

    const handleCustomerChange=()=>{
        setCustomer(current =>!current);
    }

    function signupClick(){
        history.push("/SignUp")

    }

    const ver=e=>{
        e.preventDefault();
        if(Worker==true&&Admin==true||Customer==true&&Worker==true||Customer==true&&Admin==true){
            alert("Please Only Select One")
           return;
        }
        if(Admin==true){
            AdminService.CheckAdmin(phoneNum,Password).then( props => {props==true ? history.push("/CarList"): alert("You are not an Admin!")}).catch();
        }
        else if(Worker==true){
            WorkerService.CheckWorker(phoneNum,Password).then( props => {props==true ? history.push("/WCarList"): alert("You are not an Worker!")}).catch();
        } 
        else if(Customer==true){
            localStorage.setItem("Cphonenum",phoneNum)
            CustomerService.CheckCustomer(phoneNum,Password).then( props => {props==true ? history.push("/mycustomercarlist"): alert("You are not a customer please Sign-up")}).catch();
        }
    }

    return(
        <form className="Login">
        <h2>Login</h2>
        <br></br>
        <br></br>
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
        <br></br>
        <button className='middle' type="submit" onClick={ver} >Login</button>
        <br></br>
        <br></br>
        <label>  Customer &nbsp;&nbsp;<input type="checkbox" value={Customer}  name=""  onChange={ handleCustomerChange}  /></label>
        <label>  Worker &nbsp;&nbsp;<input type="checkbox" value={Worker}  name=""  onChange={ handleWorkerChange}  /></label>
        <label>  Admin &nbsp;&nbsp;<input type="checkbox" value={Admin}  name=""  onChange={ handleAdminChange}  /></label>
        <br></br>
        <br></br>
        <b>Do Not Have An Account!!?</b><button type='button' className='middle' onClick={signupClick} >Signup</button> 
        </form>
  )
  
}

 