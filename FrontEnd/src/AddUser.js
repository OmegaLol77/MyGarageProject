import React, { useEffect, useState } from 'react'
import CustomerService from "./CustomerService";
import AdminService from './AdminService';
import WorkerService from './WorkerService';

import "./index.css";
import SideNavbar from './SideNavbar';
import validator from 'validator'



export default function AddUser() {
    const [FirstName,setFirstName]= useState("");
    const [LastName,setLastName]= useState("");
    const [Email,setEmail] = useState("");
    const [PhoneNum,setPhoneNum] = useState("");
    const [Password,setPassword] = useState("");
    const [PasswordConf,setPasswordConf] = useState("");
    const [Worker,setWorker] = useState(false);
    const [Admin,setAdmin] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
 
    function refreshPage() {
        window.location.reload(false);
      }

    const validate = (value) => {
        setPassword(value);
        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('Password Is Strong')
        } else {
            setErrorMessage('Password Is Not Strong')
        }
    }

    function ValidateEmail(emails) {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (emails.match(validRegex)) {
          return true;
        } else {
          return false;
        }
    }
    const handleWorkerChange=()=>{
        setWorker(current =>!current);
    }

    const handleAdminChange=()=>{
        setAdmin(current =>!current);
    }
    const newUser=e=>{
        e.preventDefault();
        if(Password===PasswordConf&&PhoneNum.length===10){
            if(Worker==true&&Admin==true){
                alert("Please Only Select One")
            return;
            }
            if(Admin==true){
                if(ValidateEmail(Email)===true){
                    AdminService.AddAdmin(FirstName,LastName,Email,Password,PhoneNum);
                    setTimeout(() => refreshPage(),1000);
                }
            }
            else if(Worker==true){
                if(ValidateEmail(Email)===true){
                    WorkerService.AddWorker(FirstName,LastName,Email,Password,PhoneNum);
                    setTimeout(() => refreshPage(),1000);

                }
            } 
        }
        else if(AdminService.CheckAdmin(PhoneNum)==false || WorkerService.CheckWorker(PhoneNum)==false){
            alert("Email already exists!")
        }
        else if(PhoneNum.length<10||PhoneNum.length>10){
            alert("Phone Number Is Incorrect!!");
        }
        else if(Password!=PasswordConf){
            alert("Passwords Does Not Match");
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
            <input type="password" id="Password" placeholder="Your Password" value={Password} onChange={ (e) => validate(e.target.value)} > 
            </input>
        </a>
        <br></br>
        {errorMessage === '' ? null :
        <span style={{
            fontWeight: 'bold',
            color: 'red',
        }}>{errorMessage}</span>}
        <br></br>
        <a>Retype-Password:
            <br></br>
            <input type="password" id="Password1" placeholder="Your Password" value={PasswordConf} onChange={ (e) => setPasswordConf(e.target.value)} > 
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