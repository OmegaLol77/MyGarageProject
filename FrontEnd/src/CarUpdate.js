import axios from 'axios';
import React, { useState } from 'react'
import Service from './Service';
import Popup from './PopUp';



export default function CarUpdate(id) {

  // var url = window.location.href;
  // var id = url.searchParams.get('id');
  // console.log(id);
  

  const [ownername,setownername] = useState("");
  const [ownerid,setownerid] = useState(0);
  const [carnumber,setcarnumber] = useState(0);
  const [date,setdate] = useState("");
  const [carproccess,setcarproccess] = useState("");
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
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
      <h2>Car Update</h2>
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
      <div className='inputcontent'>
        <p>Car Proccess:</p>
        <input type="text" id='carproccess' placeholder='Being Checked' value={carproccess} onChange={(e) => setcarproccess(e.target.value)}></input>
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
