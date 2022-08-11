import Service from "./Service";
import CustomerService from "./CustomerService";
import AdminService from "./AdminService";
import React, { useEffect, useState } from 'react'
import Popup from './PopUp';


export default function DeleteUser(){
    const [userid,setuserid] = useState("");
    const [usertype,setusertype] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    function refreshPage() {
      window.location.reload(false);
    }

    const handleOnClick = e => {
        e.preventDefault();
        console.log(usertype)
        if(usertype === 'Admin'){
            console.log(AdminService.DeleteAdmin(userid));
        }
        if(usertype === 'Worker'){
            console.log(Service.AddCar(userid));
        }
        if(usertype === 'Customer'){
            console.log(CustomerService.DeleteCustomer(userid));
        }
        // if(usertype === 'Option'){
        //   console.log(isOpen);
        //   refreshPage();
        // }else{
        //   togglePopup();
        // }
      };

    return(
        <div className='center'>
        <h2>Delete User</h2>
        <div className='inputcontent'>
          <p>User phoneNum:</p>
          <input type="text" id='Userid'  placeholder='0529800221' value={userid} onChange={(e) => setuserid(e.target.value)}></input>
        </div>
        <div className='inputcontent'>
        <p>User Type :</p>
        <select type="SelectList" id='carproccess'  value={usertype} onChange={(e) => setusertype(e.target.value)}>
          <option value="Option">Please select the type</option>
          <option value="Admin">Admin</option>
          <option value="Worker">Worker</option>
          <option value="Customer">Customer</option>
        </select>
      </div>
        <button className='button' onClick={handleOnClick}>Delete</button>
        {/* {isOpen && <Popup
          content={<>
            <b>Error Message</b>
            <p>One of the Text Areas is EMPTY</p>
          </>}
          handleClose={togglePopup}/>} */}
      </div>
    )
}