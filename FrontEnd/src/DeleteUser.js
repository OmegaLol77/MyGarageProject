import Service from "./Service";
import React, { useEffect, useState } from 'react'


export default function DeleteUser(){
    const [userid,setuserid] = useState("");
    const [usertype,setusertype] = useState("");
    const handleOnClick = e => {
        e.preventDefault();
        if(usertype === 'Admin'){
            console.log(Service.DeleteAdmin(userid));
        }
        if(usertype === 'Worker'){
            console.log(Service.AddCar(userid));
        }
        if(usertype === 'Customer'){
            console.log(Service.DeleteCustomer(userid));
        }
        // if(Service.AddCar(ownername,ownerid,date,carnumber)){
        //   console.log(isOpen);
        //   refreshPage();
        // }else{
        //   togglePopup();
        // }
      };

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
          <option value="option 1">Admin</option>
          <option value="option 2">Worker</option>
          <option value="option 3">Customer</option>
        </select>
      </div>
        <button className='button' onClick={handleOnClick}>Delete</button>
        {/* {isOpen && <Popup
          content={<>
            <b>Error Message</b>
            <p>One of the Text Areas is EMPTY or the car you are trying to save is already in the DataBase</p>
          </>}
          handleClose={togglePopup}/>} */}
      </div>
    )
}