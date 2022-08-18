import Service from "./Service";
import CustomerService from "./CustomerService";
import AdminService from "./AdminService";
import React, { useEffect, useState } from 'react'
import WorkerService from "./WorkerService";


export default function DeleteUser(){
    const [userid,setuserid] = useState("");
    const [usertype,setusertype] = useState("");

    function refreshPage() {
      window.location.reload(false);
    }

    const handleOnClick = e => {
        e.preventDefault();
        console.log(usertype)
        if(usertype === 'Admin'){
          AdminService.DeleteAdmin(userid);
          setTimeout(() => refreshPage(),1000);
        }
        if(usertype === 'Worker'){
          WorkerService.DeleteWorker(userid);
          setTimeout(() => refreshPage(),1000);
        }
        if(usertype === 'Customer'){
          CustomerService.DeleteCustomer(userid);
          setTimeout(() => refreshPage(),1000);
        }

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
      </div>
    )
}