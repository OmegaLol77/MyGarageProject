import Service from "./Service";
import React, { useEffect, useState } from 'react'
import CustomerService from "./CustomerService"


export default function DeleteUser(){
    const [userid,setuserid] = useState("");
    const [usertype,setusertype] = useState("");




    const handleOnClick = e => {
        e.preventDefault();
        alert("In delete method and user type is "+ usertype+"Fuck u jeris");
        if(usertype === 'Admin'){
            console.log(Service.DeleteAdmin(userid));
            CustomerService.DeleteCustomer(userid);
        }
        if(usertype === 'Worker'){
            console.log(Service.AddCar(userid));
        }
        if(usertype === 'Customer'){
          CustomerService.DeleteCustomer(userid);
        }
        // if(Service.AddCar(ownername,ownerid,date,carnumber)){
        //   console.log(isOpen);
        //   refreshPage();
        // }else{
        //   togglePopup();
        // }
      }

    return(
        <div className='center'>
        <h2>Car Update</h2>
        <div className='inputcontent'>
          <p>User Email:</p>
          <input type="text" id='Userid'  placeholder='Jack.96@gmail.com' value={userid} onChange={(e) => setuserid(e.target.value)}></input>
        </div>
        <div className='inputcontent'>
        <p>Car Proccess:</p>
        <select type="SelectList" id='carproccess'  value={usertype} onChange={(e) => setusertype(e.target.value)}>
          <option value="Admin">Admin</option>
          <option value="Worker">Worker</option>
          <option value="Customer">Customer</option>
        </select>
      </div>
        <button className="submit" onClick={handleOnClick}>Delete</button>
        {/* {isOpen && <Popup
          content={<>
            <b>Error Message</b>
            <p>One of the Text Areas is EMPTY or the car you are trying to save is already in the DataBase</p>
          </>}
          handleClose={togglePopup}/>} */}
      </div>
    )
}