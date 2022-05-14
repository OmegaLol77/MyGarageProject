import axios from 'axios';
import React from "react";
const ADDCUSTOMER_REST_API_URL='http://localhost:8080/Customer/addCustomer';

class CustomerService{
        
    //contiune the validation of the user name and the passWord :)
    CheckCustomer( Email,Password ){
         const data=[];
         const y={answer:false};
         const z=[];

     return  axios.get('http://localhost:8080/Customer/'+`${Email}`+'/findCustomerByEmail').then((response)=>{
    
                    data[0]=response.data;
                 return y.answer=Password==data[0].password;
            }).then(function(response) {
                z[0]=response;
              return  z[0];
            })
            
        
        }



        AddCoustmer(FirstName,LastName,Email,Password){
            console.log(FirstName,LastName,Email,Password)
            this.state = { 
                FirstName:FirstName,
                LastName:LastName,
                Email:Email,
                password:Password,
                carNum:55,
                PhoneNum:6
                
            }
            
            axios.post(ADDCUSTOMER_REST_API_URL,this.state).then((response)=>{
                console.log(response);
            },(error)=>{console.log(error)});
              }
}
export default new CustomerService();