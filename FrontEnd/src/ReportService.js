
import axios from 'axios';
import React from "react";

const ADD_REPORT_REST_API_URL='https://backend.mygarage.link:8443/Report/';
const UPDATE_REPORT_REST_API_URL='https://backend.mygarage.link:8443/Report/';
const NOTAPPROVED_REPORT_REST_API_URL='https://backend.mygarage.link:8443/Report';


class ReportService{

    GetNotApproved(approved){
        return axios.get(NOTAPPROVED_REPORT_REST_API_URL+`/${approved}/getNotApproved`);
    }

    GetSpecificReport(CarNum){
        return axios.get(NOTAPPROVED_REPORT_REST_API_URL+`/${CarNum}/getReport`);
    } 
   
    AddReport(carNum,descripton){
        axios.post(ADD_REPORT_REST_API_URL+`${carNum}/&${descripton}`+'/addReport').then((response)=>{
            alert("Report Added Successfully")
            return response.data;
        },(error)=>{
            console.log(error)});
    }

    DeleteReport(carNum){ 
        axios.delete('https://backend.mygarage.link:8443/Report/'+`${carNum}`+'/deleteReport').then((response)=>
        {
            alert("Report Deleted Successfully");
        },(error)=>
            console.log(error));
    }


    updateReport(CarNum,Description,Date){
        axios.post(UPDATE_REPORT_REST_API_URL`${CarNum}/&${Description}/&${Date}`+'/updateReport')
        .then((response)=>{
            alert("Report Update Successfully");
        },(error)=>{
            alert(error);
            console.log(error)});
        }
    }
export default new ReportService();