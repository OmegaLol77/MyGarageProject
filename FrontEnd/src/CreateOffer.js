import axios from 'axios';
import React, { useEffect,useState } from 'react';
import CustomerService from './CustomerService';
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
  return axios.get('https://backend.mygarage.link:8443/Report'+`/${carNum}/getReport`).then((res) => {
  if(res.status == 200){
        Report = res.data;
      return true;
    }
    if (res.status > 299){
      return false;
    }
  })};
  
 function saveOffer(Offer){
    var  customer
    CustomerService.getCustomerByCarId(carNum).then((response)=>
    {
         customer=response.data
         OfferService.AddOffer(customer.firstName,customer.phoneNum,carNum,Offer);
     

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
          <div className='center'>
          <h2>Car Update</h2>
          <table border="2">
                    <thead>
                        <tr>
                            <td>car number</td>
                            <td>descripton</td>
                            <td>date</td>
                            <td>Offer</td>
                            <td>Submit</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                                <tr key={Report.carNum}>
                                    <td>{Report.carNum}</td>
                                    <td>{Report.descripton}</td>
                                    <td>{Report.date}</td>
                                    <td><input type="number" id='Offer'  value={Offer}  onChange={(e) => setOffer(e.target.value)}></input></td>
                                    <td><button type="submit" onClick={saveOffer(Offer)} >Submit</button></td> 

                                    </tr>
                            
                        }
                    </tbody>
                </table>
             

 </div>)
   
      }
    } 
    
    }
    
    </Async>
    
)}