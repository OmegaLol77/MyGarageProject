import axios from 'axios';
import React from "react";
const Local_URL = 'https://localhost:8443/Customer/';
const Server_URL='https://backend.mygarage.link:8443/Customer/';

class CustomerService{
        
    //contiune the validation of the user name and the passWord :)
    CheckCustomer( phoneNum,Password ){
         const data=[];
         const y={answer:false};
         const z=[];

     return  axios.get(Server_URL+`${phoneNum}`+'/findCustomerByphoneNum').then((response)=>{
    
                    data[0]=response.data;
                 return y.answer=Password==data[0].password;
            }).then(function(response) {
                z[0]=response;
              return  z[0];
            })
            
        
        }



        AddCoustmer(FirstName,LastName,Email,Password,phoneNum){
            console.log(FirstName,LastName,Email,Password,phoneNum)
            this.state = { 
                firstName:FirstName,
                lastName:LastName,
                email:Email,
                password:Password,
                carNum:0,
                phoneNum:phoneNum
                
            }
            
            axios.post(Server_URL+'addCustomer',this.state).then((response)=>{
                console.log(response.data);
                alert(response.data);
            //    if(response.data == 'false'){
            //     alert("the email is already signed up");
            //    }
            },(error)=>{
                alert(error);
                console.log(error)});
            }



        DeleteCustomer(phoneNum){
            axios.delete(Server_URL+`${phoneNum}`+'deleteCustomer').then((response)=>{
                console.log(response.data);
            },(error)=>
                console.log(error));
            }
              
}
export default new CustomerService();