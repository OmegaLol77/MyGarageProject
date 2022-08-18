import axios from 'axios';
import React from "react";

const ADMIN_REST_API_URL = 'https://backend.mygarage.link:8443/Admin';

class AdminService{
        
    //contiune the validation of the user name and the passWord :)
    CheckAdmin( phoneNum,Password ){
         const data=[];
         const y={answer:false};
         const z=[];

     return  axios.get(ADMIN_REST_API_URL+'/'+`${phoneNum}`+'/findAdminByphoneNum')
        .then((response)=>{
            data[0]=response.data;
            return y.answer=Password==data[0].password;
        }).then(function(response) {
            z[0]=response;
            return  z[0];
            })
    }
    DeleteAdmin(phoneNum){
        axios.delete(ADMIN_REST_API_URL+'/'+`${phoneNum}/deleteAdmin`)
        .then((response)=>{
            alert.log("Admin Deleted Successfully");
        },(error)=>
            console.log(error));
    }

    AddAdmin(FirstName,LastName,Email,Password,phoneNum){
        this.state = { 
            firstName:FirstName,
            lastName:LastName,
            email:Email,
            password:Password,
            phoneNum:phoneNum
        }
        axios.post(ADMIN_REST_API_URL+'/addAdmin',this.state)
        .then((response)=>{
            if(response.data == 'false'){
                alert("Email Or PhoneNumber are already signed up");
            }else{
                alert("User Added Successfully");
            }
        },(error)=>{
            console.log(error)});
        }
    }
export default new AdminService();