import axios from 'axios';
import React from "react";
const FINDWORKER_REST_API_URL='https://backend.mygarage.link:8443/Worker/';
class WorkerService{

    
    CheckWorker( phoneNum,Password ){
        const data=[];
        const y={answer:false};
        const z=[];

    return  axios.get(FINDWORKER_REST_API_URL+`${phoneNum}`+'/findWorkerByphoneNum').then((response)=>{
            alert(phoneNum);
                   data[0]=response.data;
                return y.answer=Password==data[0].password;
           }).then(function(response) {
               z[0]=response;
             return  z[0];
           })
           
       
       }





}
export default new WorkerService();