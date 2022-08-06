import axios from 'axios';
import React from "react";
const FINDWORKER_REST_API_URL='https://178.62.86.200:8443/Worker/';
class WorkerService{

    
    CheckWorker( Email,Password ){
        const data=[];
        const y={answer:false};
        const z=[];

    return  axios.get(FINDWORKER_REST_API_URL+`${Email}`+'/findWorkerByEmail').then((response)=>{
            alert(Email);
                   data[0]=response.data;
                return y.answer=Password==data[0].password;
           }).then(function(response) {
               z[0]=response;
             return  z[0];
           })
           
       
       }





}
export default new WorkerService();