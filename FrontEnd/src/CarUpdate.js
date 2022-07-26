import axios from 'axios';
import React, { useEffect,useState } from 'react'
import Service from './Service';
import Popup from './PopUp';
import Async from 'react-async'

var car;

const checker = async () => {
  let url = window.location.href;
  let neurl = new URL(url);
  let id = neurl.searchParams.get('id');
  
  return axios.get('http://localhost:8080/Car'+`/${id}/findById`).then((res) => {
    if(res.status == 200){
      car = res.data;
      return true;
    }
    if (res.status > 299){
      return false;
    }
  });
}

export default function CarUpdate(id) {

  const [ownername,setownername] = useState("");
  const [ownerid,setownerid] = useState("");
  const [carnumber,setcarnumber] = useState("");
  const [date,setdate] = useState("");
  const [carproccess,setcarproccess] = useState("");

  const current = new Date();
  const currdate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  // const [isOpen, setIsOpen] = useState(false);
  // const [car,setCar]=useState({});

  // const togglePopup = () => {
  //   setIsOpen(!isOpen);
  // }

  function refreshPage() {
    window.location.reload(false);
  }

  const handleOnClick = e => {
    e.preventDefault();
    console.log(Service.updateCar(car.ownername,car.ownerid,currdate,car.carnumber,car.carproccess,car.id));
    // if(Service.AddCar(ownername,ownerid,date,carnumber)){
    //   console.log(isOpen);
    //   refreshPage();
    // }else{
    //   togglePopup();
    // }
  };
  
  return(
    <Async promiseFn={checker}>
      {({ data,error, isLoading }) => {
        if(isLoading){
          return(
            <div>
              
            </div>
          )
        }
        if(error){
          console.log(error);
        }
        if (data) {
          setownername(car.ownername);
          setownerid(car.ownerid);
          setcarnumber(car.carnumber);
          setdate(car.date);
          setcarproccess(car.carproccess);
          console.log(car.ownerid)
          console.log(car.carnumber)
          return(
          <div className='center'>
          <h2>Car Update</h2>
          <div className='inputcontent'>
            <p>Owner Name:</p>
            <input type="text" id='ownername' defaultValue={ownername} onChange={ (e) => car.ownername = e.target.value}></input>
          </div>
          <div className='inputcontent'>
            <p>Owner ID:</p>
            <input type="text" id='ownerid' defaultValue={ownerid} onChange={(e) => car.ownerid = e.target.value}></input>
          </div>
          <div className='inputcontent'>
            <p>Car Number:</p>
            <input type="text" id='carnumber' defaultValue={carnumber} onChange={(e) => car.carnumber = e.target.value}></input>
          </div>
          <div className='inputcontent'>
            <p>Date:</p>
            <input type="text" id='carnumber' value={currdate} onChange={(e) => setdate(e.target.value)}></input>
          </div>
          <div className='inputcontent'>
            <p>Car Proccess:</p>
            <select type="SelectList" id='carproccess' defaultValue={carproccess} onChange={(e) => car.carproccess = e.target.value}>
              <option value="option 1">Please Choose</option>
              <option value="Car is Checked">Car is Checked</option>
              <option value="Car Being Repaired">Car Being Repaired</option>
              <option value="Car Repairing Done">Car Repairing Done</option>
            </select>
          </div>
          <button className='button' onClick={handleOnClick}>Save</button>
          {/* {isOpen && <Popup
            content={<>
              <b>Error Message</b>
              <p>One of the Text Areas is EMPTY or the car you are trying to save is already in the DataBase</p>
            </>}
            handleClose={togglePopup}/>} */}
        </div>)
        }
      }
    }
    </Async>
  )
}
