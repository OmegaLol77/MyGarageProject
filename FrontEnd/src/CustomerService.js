import axios from 'axios';
import React from "react";

const Server_URL='https://backend.mygarage.link:8443/Customer/';

class CustomerService{
        
    //contiune the validation of the user name and the passWord :)
    CheckCustomer(phoneNum,Password ){
        const data=[];
        const y={answer:false};
        const z=[];
        return  axios.get(Server_URL+`${phoneNum}`+'/findCustomerByphoneNum')
        .then((response)=>{
            data[0]=response.data;
            return y.answer=Password==data[0].password;
        }) 
        .then(function(response) {
            z[0]=response;
            return  z[0];
            })
        }
        
    getCustomerByCarId(carNum){
        return axios.get(Server_URL+`${carNum}`+'/GetCustomerByCarNum');
    }

    AddCoustmer(FirstName,LastName,Email,Password,phoneNum){
        this.state = { 
            firstName:FirstName,
            lastName:LastName,
            email:Email,
            password:Password,
            carNum:0,
            phoneNum:phoneNum
        }
        axios.post(Server_URL+'addCustomer',this.state)
        .then((response)=>{
            if(response.data == 'false'){
                alert("Email And PhoneNumber Are already signed up");
            }else{
                alert("Signed Up Successfully!!");
            }
        },(error)=>{
            console.log(error)});
    }

    DeleteCustomer(phoneNum){
        axios.delete(Server_URL+`${phoneNum}`+'/deleteCustomer').then((response)=>{
            alert("Customer Deleted Successfully");
        },(error)=>
            console.log(error));
    }
              
}
export default new CustomerService();