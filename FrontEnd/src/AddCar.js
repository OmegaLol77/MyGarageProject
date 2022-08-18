import axios from 'axios';
import React, { useState } from 'react'
import Service from './Service';



export default function AddCar() {
  const [ownername,setownername] = useState("");
  const [ownerid,setownerid] = useState(0);
  const [carnumber,setcarnumber] = useState(0); 
  const [PhoneNum,setPhoneNum] = useState(0);
  const [date,setdate] = useState("");
  const [carproccess,setcarproccess] = useState("");

  const current = new Date();
  const currdate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


  function refreshPage() {
    window.location.reload(false);
  }
  const handleOnClick = e => {
    e.preventDefault();
    var phonlen = PhoneNum.toString().length;
    if(phonlen===10){
      Service.AddCar(ownername,ownerid,currdate,carnumber,carproccess,PhoneNum);
      setTimeout(() => refreshPage(),1000);
    }else{
      alert("Phone Number Is Incorrect!!");
    }
    
  };
  return (
    <div className='center'>
      <h2>AddCar</h2>
      <div className='inputcontent'>
        <p>Owner Name:</p>
        <input type="text" id='ownername' placeholder='example: Jack Mathew' value={ownername} onChange={ (e) => setownername(e.target.value)}></input>
      </div>
      <div className='inputcontent'>
        <p>Owner ID:</p>
        <input type="text" id='ownerid' value={ownerid} onChange={(e) => setownerid(e.target.value)}></input>
      </div>
      <div className='inputcontent'>
        <p>Owner PhoneNum:</p>
        <input type="text" id='ownerPNum' value={PhoneNum} onChange={(e) => setPhoneNum(e.target.value)}></input>
      </div>
      <div className='inputcontent'>
        <p>Car Number:</p>
        <input type="text" id='carnumber' value={carnumber} onChange={(e) => setcarnumber(e.target.value)}></input>
      </div>
      <div className='inputcontent'>
        <p>Date:</p>
        <input type="text" id='carnumber' value={currdate} onChange={(e) => setdate(e.target.value)}></input>
      </div>
      <div className='inputcontent'>
        <p>Car Proccess:</p>
        <select type="SelectList" id='carproccess' placeholder='Being Checked' defaultValue={carproccess} onChange={(e) => setcarproccess(e.target.value)}>
          <option value="option 1">Please Choose</option>
          <option value="Car Inserted To Database">Car Inserted To Database</option>
          <option value="Car is Checked">Car is Checked</option>
          <option value="Car Being Repaired">Car Being Repaired</option>
          <option value="Car Repairing Done">Car Repairing Done</option>
        </select>
      </div>
      <button className='button' onClick={handleOnClick}>Save</button>
    </div>
  )
}
