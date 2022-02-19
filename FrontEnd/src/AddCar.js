import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Service from './Service';


export default function AddCar(id) {
  const [ownername,setownername] = useState("");
  const [ownerid,setownerid] = useState(0);
  const [carnumber,setcarnumber] = useState(0);
  const [date,setdate] = useState("");
  // const [car,setCar]=useState({});
  // useEffect(()=>{
  //   axios.get('http://localhost:8080/Car'+`/${id}/findById`)
  //   .then((result)=>{
  //       setCar(result.data.result);
  //     }
  //   )
  // });

  function refreshPage() {
    window.location.reload(false);
  }
  const handleOnClick = e => {
    e.preventDefault();
    Service.AddCar(ownername,ownerid,date,carnumber);
    refreshPage();
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
        <input type="number" id='ownerid' value={ownerid} onChange={(e) => setownerid(e.target.value)}></input>
      </div>
      <div className='inputcontent'>
        <p>Car Number:</p>
        <input type="number" id='carnumber' value={carnumber} onChange={(e) => setcarnumber(e.target.value)}></input>
      </div>
      <div className='inputcontent'>
        <p>Date:</p>
        <input type="text" id='date' placeholder='example: 15/03/2020' value={date} onChange={(e) => setdate(e.target.value)}></input>
      </div>
      <button className='button' onClick={handleOnClick}>Save</button>
    </div>
  )
}
