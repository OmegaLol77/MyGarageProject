import axios from 'axios';
import React from "react";
const CHECKEDCARS_REST_API_URL='http://localhost:8080/Offer/getAllCheckedCars';

class OfferService{

    getAllCheckedCars(){
        return axios.get(CHECKEDCARS_REST_API_URL);
    }
   
    AddOffer(on,oi,cn,cp){
        this.state = { 
           
            ownername:on,
            ownerid:oi,
            carnumber:cn,
            offer:cp
          
           
        }
        axios.post('http://localhost:8080/Offer/addOffer',this.state).then((response)=>
        {return response.data;
        },(error)=>
        console.log(error));
    }




}
export default new OfferService(); 