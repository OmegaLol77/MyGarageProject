import axios from 'axios';
import React from "react";
const WORKER_REST_API_URL='https://backend.mygarage.link:8443/Worker/';
class WorkerService{

    
    CheckWorker( phoneNum,Password ){
        const data=[];
        const y={answer:false};
        const z=[];

    return  axios.get(WORKER_REST_API_URL+`${phoneNum}`+'/findWorkerByphoneNum').then((response)=>{
            alert(phoneNum);
                   data[0]=response.data;
                return y.answer=Password==data[0].password;
           }).then(function(response) {
               z[0]=response;
             return  z[0];
           })
           
    
       }

       AddWorker(FirstName,LastName,Email,Password,phoneNum){
        this.state = { 
            firstName:FirstName,
            lastName:LastName,
            email:Email,
            password:Password,
            phoneNum:phoneNum
        }
        axios.post(WORKER_REST_API_URL+'addWorker',this.state)
        .then((response)=>{
            alert(response.data);
            if(response.data == 'false'){
            alert("the email is already signed up");
            }
        },(error)=>{
            alert(error);
            console.log(error)});
        }



}
export default new WorkerService();