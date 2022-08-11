import axios from 'axios';
import React from "react";
const CHECKEDCARS_REST_API_URL='https://localHost:8080/Offer/getAllCheckedCars';

class OfferService{

    getAllCheckedCars(){
        return axios.get(CHECKEDCARS_REST_API_URL);
    }
   





}
export default new OfferService(); 