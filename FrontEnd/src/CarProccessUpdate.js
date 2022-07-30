import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Service from './Service';
import Popup from './PopUp';



export default function CarProccessUpdate() {
  const [ownername,setownername] = useState("");
  const [ownerid,setownerid] = useState(0);
  const [carnumber,setcarnumber] = useState(0);
  const [date,setdate] = useState("");
  const [carproccess,setcarproccess] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  // handleCallback = (childData) =>{
  //     this.setownername(childData.ownername);
  //     this.setownerid(childData.ownerid);
  //     this.setcarnumber(childData.carnumber);
  //     this.setdate(childData.date);
  //     this.setcarproccess(childData.carproccess);
  // }
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
    console.log(Service.AddCar(ownername,ownerid,date,carnumber,carproccess));
    // if(Service.AddCar(ownername,ownerid,date,carnumber)){
    //   console.log(isOpen);
    //   refreshPage();
    // }else{
    //   togglePopup();
    // }
  };
  return (
    <div className='center'>
      <h2>Car Proccess Update</h2>
      <div className='inputcontent'>
        <p>Owner ID:</p>
        <input type="number" id='ownerid' value={ownerid} onChange={(e) => setownerid(e.target.value)}></input>
      </div>
      <div className='inputcontent'>
        <p>Car Number:</p>
        <input type="number" id='carnumber' value={carnumber} onChange={(e) => setcarnumber(e.target.value)}></input>
      </div>
      <div className='inputcontent'>
        <p>Car Proccess:</p>
        <select type="SelectList" id='carproccess' placeholder='Being Checked' value={carproccess} onChange={(e) => setcarproccess(e.target.value)}>
          <option value="option 1">Car Being</option>
          <option value="Car is Checked">Car is Checked</option>
          <option value="Car Being Repaired">Car Being Repaired</option>
          <option value="Car Repairing Done">Car Repairing Done</option>
        </select>
      </div>
      <button className='button' onClick={handleOnClick}>Save</button>
      {isOpen && <Popup
        content={<>
          <b>Error Message</b>
          <p>One of the Text Areas is EMPTY or the car you are trying to save is already in the DataBase</p>
        </>}
        handleClose={togglePopup}/>}
    </div>
  )
}
