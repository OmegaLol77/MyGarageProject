import React, { useEffect, useState } from 'react'
import CustomerService from "./CustomerService";
import AdminService from './AdminService';
import WorkerService from './WorkerService';

import "./index.css";
import SideNavbar from './SideNavbar';




export default function AddUser() {
    const [FirstName,setFirstName]= useState("");
    const [LastName,setLastName]= useState("");
    const [Email,setEmail] = useState("");
    const [PhoneNum,setPhoneNum] = useState("");
    const [Password,setPassword] = useState("");
    const [PasswordConf,setPasswordConf] = useState("");
    const [Worker,setWorker] = useState(false);
    const [Admin,setAdmin] = useState(false);

    const handleWorkerChange=()=>{
        setWorker(current =>!current);
    }

    const handleAdminChange=()=>{
        setAdmin(current =>!current);
    }
    const newUser=e=>{
        e.preventDefault();
    if(Password===PasswordConf){
        if(Worker==true&&Admin==true){
            alert("Please Only Select One")
           return;
        }
        if(Admin==true){
            AdminService.AddAdmin(FirstName,LastName,Email,Password,PhoneNum);
        }
        else if(Worker==true){
            WorkerService.AddWorker(FirstName,LastName,Email,Password,PhoneNum);
        } 
    }
    else if(AdminService.CheckAdmin(PhoneNum)==false || WorkerService.CheckWorker(PhoneNum)==false){
        alert("Email already exists!")
    }
    if(Password!=PasswordConf){
        alert("two passwords is not the same");
    }
    else{
        alert("Email or Phone Number Already in the DB")
    }
    }

    return(
        
        <form className="SignUp">
        <h2>Add User</h2>
            <a>First Name:
            <br></br> 
            <input type="text"  id="FirstName" placeholder="First Name" value={FirstName} onChange={ (e) =>setFirstName(e.target.value)}>
            </input>
        </a>
        <br></br><br></br>
        <a>Last Name:
            <br></br> 
            <input type="text"id="LastName"  placeholder="lastName Name" value={LastName} onChange={ (e) =>setLastName(e.target.value)}>
            </input>
        </a>
        <br></br><br></br>
        <a>Email:
        <br></br>
            <input type="text" id="Email"  placeholder="Your Email" value={Email} onChange={ (e) => setEmail(e.target.value)} >
            </input>
        </a>
        <br></br><br></br>
        <a>Phone Number:
        <br></br>
            <input type="number" id="PhoneNum"  placeholder="Phone Number" value={PhoneNum} onChange={ (e) => setPhoneNum(e.target.value)} >
            </input>
        </a>
        <br></br><br></br>
        <a>Password:
            <br></br>
            <input type="password" id="Password" placeholder="Your Password" value={Password} onChange={ (e) => setPassword(e.target.value)} > 
            </input>
        </a>
        <br></br>
        <br></br>
        <a>Retype-Password:
            <br></br>
            <input type="password" id="Password" placeholder="Your Password" value={PasswordConf} onChange={ (e) => setPasswordConf(e.target.value)} > 
            </input>
        </a>
        <br></br>
        <br></br>
        <label>  Worker<input type="checkbox" value={Worker}  name=""  onChange={ handleWorkerChange}  /></label>
        <br></br>
        <br></br>
        <label>  Admin<input type="checkbox" value={Admin}  name=""  onChange={ handleAdminChange}  /></label>
        <br></br>
        <br></br>
        <button className='button' type="submit" onClick={newUser} >Submit</button>

        </form>

  )


}