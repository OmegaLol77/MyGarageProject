import axios from 'axios';
import React, { useEffect,useState } from 'react';
import Service from './Service';
import Popup from './PopUp';
import Async from 'react-async';
import OfferService from'./OfferService';
var Report;
let carNum;


const checker = async () => {
  let url = window.location.href;
  let neurl = new URL(url);
  let id = neurl.searchParams.get('id');
  carNum =id;
  //backend.mygarage.link:8443
  return axios.get('https://backend.mygarage.link:8443/Report'+`/${carNum}/getReport`).then((res) => {
    if(res.status == 200){
      Report = res.data;
      console.log(Report.carNum);
      return true;
    }
    if (res.status > 299){
      alert("This Car Doesnt have Report")
      return false;
      }
  });
}
function refreshPage() {
  window.location.reload(false);
}
function saveOffer(Offer){
  var ownername;
  var ownerid;
  const current = new Date();
  const currdate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  var  car
  return axios.get('https://backend.mygarage.link:8443/Car'+`/${carNum}/findById`)
  .then((res) => {
    car=res.data;
    ownername=car.ownername;
    ownerid=car.ownerid;
    console.log(Offer)
    OfferService.AddOffer(ownername,ownerid,carNum,Offer,currdate,0);
    setTimeout(() => refreshPage(),1000);
  })
};

  
export default function CreateOffer(id) {
    const [Offer,setOffer] = useState(0); 

  return(

    <Async promiseFn={checker}>
      {({ data,error, isLoading }) => {
        if(isLoading){
          return(
            <div>
              <p>Loading Data!!</p>
            </div>
          )
        }
        if(error){
          console.log(error);
        }
        if (data) {
          return(
          <div className='content'>
            <h2>Car Update</h2>
            <table className="styled-table" border="1">
              <thead>
                <tr>
                  <td>car number</td>
                  <td>descripton</td>
                  <td>date</td>
                  <td>Offer</td>
                  <td>Submit</td>
                </tr>
              </thead>
              <tbody>{
                <tr className="active-row" key={Report.carNum}>
                  <td>{Report.carNum}</td>
                  <td>{Report.descripton}</td>
                  <td>{Report.date}</td>
                  <td><input type="number" id='Offer'  value={Offer}  onChange={(e) => setOffer(e.target.value)}></input></td>
                  <td><button className='middle' type="submit" onClick={() =>saveOffer(Offer)} >Submit</button></td> 
                </tr>}
              </tbody>
            </table>
          </div>)
   
      }
    } 
    
    }
    
    </Async>
    
)}