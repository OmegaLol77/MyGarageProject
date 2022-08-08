
import axios from 'axios';
import React from "react";

const ADD_REPORT_REST_API_URL='https://backend.mygarage.link:8443/Report/addReport';
const UPDATE_REPORT_REST_API_URL='https://backend.mygarage.link:8443/Report/addReport';

class ReportService{

AddReport(CarNum,Description){
    console.log("enterd the method");
    this.state={descripton:Description,carNum:CarNum};
    axios.post(ADD_REPORT_REST_API_URL,this.state).then((response)=>{
       alert(response.data);
  
    },(error)=>{
        alert(error);
        console.log(error)});

}
DeleteReport(carNum){
    
    axios.delete('https://backend.mygarage.link:8443/Report/'+`${carNum}`+'/deleteReport').then((response)=>
    {
        console.log(response.data);
    },(error)=>
    console.log(error));
}


updateReport(CarNum,Description){
    this.state={descripton:Description,carNum:CarNum};
    axios.post(UPDATE_REPORT_REST_API_URL,this.state).then((response)=>{
       alert(response.data);
  
    },(error)=>{
        alert(error);
        console.log(error)});
}
}



export default new ReportService();