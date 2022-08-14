
import axios from 'axios';
import React from "react";

const ADD_REPORT_REST_API_URL='https://backend.mygarage.link:8443/Report/addReport';
const UPDATE_REPORT_REST_API_URL='https://backend.mygarage.link:8443/Report/updateReport';
const NOTAPPROVED_REPORT_REST_API_URL='https://backend.mygarage.link:8443/Report';



class ReportService{

    GetNotApproved(approved){
        return axios.get(NOTAPPROVED_REPORT_REST_API_URL+`/${approved}/getNotApproved`);
    } 

        
    AddReport(CarNum,Description,Date,Approved){
        this.state={
            descripton:Description,
            carNum:CarNum,
            date:Date,
            approved:Approved
        }
        axios.post(ADD_REPORT_REST_API_URL,
            this.state)
        .then((response)=>{
            return response.data;
        },(error)=>{
            console.log(error)});
    }

    DeleteReport(carNum){ 
        axios.delete('https://backend.mygarage.link:8443/Report/'+`${carNum}`+'/deleteReport').then((response)=>
        {
            console.log(response.data);
        },(error)=>
        console.log(error));
    }


    updateReport(CarNum,Description,Date,Approved){
        this.state={
            descripton:Description,
            carNum:CarNum,
            date:Date,
            approved:Approved
        };
        axios.post(UPDATE_REPORT_REST_API_URL,this.state)
        .then((response)=>{
            // alert(response.data);
        },(error)=>{
            alert(error);
            console.log(error)});
        }
    }



export default new ReportService();