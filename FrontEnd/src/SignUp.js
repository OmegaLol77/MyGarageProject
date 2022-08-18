import React, { useEffect, useState } from 'react'
import CustomerService from "./CustomerService";
import "./index.css";
import SideNavbar from './SideNavbar';
import validator from 'validator'



export default function SignUp() {
    const[FirstName,setFirstName]= useState("");
    const [LastName,setLastName]= useState("");
    const [Email,setEmail] = useState("");
    const [PhoneNum,setPhoneNum] = useState("");
    const [Password,setPassword] = useState("");
    const [PasswordConf,setPasswordConf] = useState("");

    const [errorMessage, setErrorMessage] = useState('')
 
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

    const newCustomer=e=>{
        e.preventDefault();
        if(Password===PasswordConf){
            if(ValidateEmail(Email)===true){
                CustomerService.AddCoustmer(FirstName,LastName,Email,Password,PhoneNum) ;
            }
        }
        else if(CustomerService.CheckCustomer(Email)==false){
            alert("Email already exists!")
        }
        if(Password!=PasswordConf){
            alert("Passwords Does Not Match OR They Dont Meet The PARAMETERS!! " );
        }
        else{
            alert("Email Already in the DB")
        }
    }

    
    return(
        
        <form className="SignUp">
        <h2>Sign Up</h2>
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
        <div className="message">
            <a>Password must contain the following:</a>
            <p id="letter" >A lowercase letter</p>
            <p id="capital" >A capital (uppercase) letter</p>
            <p id="number" >A number</p>
            <p id="length" >Minimum 8 characters</p>
        </div>
        <br></br>
        <button className='middle' type="submit" onClick={newCustomer} >Submit</button>

        </form>

  )


}