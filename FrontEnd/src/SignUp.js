import React, { useEffect, useState } from 'react'
import CustomerService from "./CustomerService";
import "./index.css";



export default function SignUp() {
    const[FirstName,setFirstName]= useState("");
    const [LastName,setLastName]= useState("");
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const [PasswordConf,setPasswordConf] = useState("");

    const newCustomer=e=>{
        e.preventDefault();
        if(Password===PasswordConf){
            console.log("trying to enter cust");
        CustomerService.AddCoustmer(FirstName,LastName,Email,Password);
        console.log("end of trying to enter cust");
    }
    }

    
    return(
        <form className="SignUp">
        <h1>Sign Up</h1>
        <a>
            First Name:
            <br></br> 
            <input type="text" placeholder="First Name" value={FirstName} onChange={ (e) =>setFirstName(e.target.value)}>
            </input>
        </a>
        <br></br><br></br>
        <a>
            Last Name:
            <br></br> 
            <input type="text" placeholder="First Name" value={LastName} onChange={ (e) =>setLastName(e.target.value)}>
            </input>
        </a>
        <br></br><br></br>
        
        <a>Email:
        <br></br>
            <input type="text" id="Email" placeholder="Your Email" value={Email} onChange={ (e) => setEmail(e.target.value)} >
            
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

        </form>


        
  )


}