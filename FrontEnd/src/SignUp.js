import React, { useEffect, useState } from 'react'
import CustomerService from "./CustomerService";
import "./index.css";
import SideNavbar from './SideNavbar';




export default function SignUp() {
    const[FirstName,setFirstName]= useState("");
    const [LastName,setLastName]= useState("");
    const [Email,setEmail] = useState("");
    const [PhoneNum,setPhoneNum] = useState("");
    const [Password,setPassword] = useState("");
    const [PasswordConf,setPasswordConf] = useState("");

    const newCustomer=e=>{
        e.preventDefault();
        if(Password===PasswordConf){
       CustomerService.AddCoustmer(FirstName,LastName,Email,Password,PhoneNum) ;
       
    }
    else if(CustomerService.CheckCustomer(Email)==false){
        alert("Email already exists!")
    }
  
    if(Password!=PasswordConf){
        alert("two passwords is not the same");
    }
    else{
        alert("Email Already in the DB")
    }
    }

    
    return(
        
        <form className="SignUp">
       
        <a>
            First Name:
            <br></br> 
            <input type="text"  id="FirstName" placeholder="First Name" value={FirstName} onChange={ (e) =>setFirstName(e.target.value)}>
            </input>
        </a>
        <br></br><br></br>
        <a>
            
            Last Name:
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

      
        <button type="submit" onClick={newCustomer} >Submit</button>
        <h1>Sign Up</h1>
        
        </form>


        
  )


}