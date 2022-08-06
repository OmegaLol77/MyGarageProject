import axios from 'axios';
import React from "react";
const ADDCUSTOMER_REST_API_URL='https://178.62.86.200:8443/Customer/addCustomer';

class CustomerService{
        
    //contiune the validation of the user name and the passWord :)
    CheckCustomer( Email,Password ){
         const data=[];
         const y={answer:false};
         const z=[];

     return  axios.get('https://178.62.86.200:8443/Customer/'+`${Email}`+'/findCustomerByEmail').then((response)=>{
    
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
            
            axios.post(ADDCUSTOMER_REST_API_URL,this.state).then((response)=>{
                console.log(response.data);
               alert(response.data);
            //    if(response.data == 'false'){
            //     alert("the email is already signed up");
            //    }
            },(error)=>{
                alert(error);
                console.log(error)});
              }



              DeleteCustomer(Email){
                axios.delete('https://178.62.86.200:8443/Customer/'+`${Email}`+'/deleteCustomer').then((response)=>
                {
                    console.log(response.data);
                },(error)=>
                console.log(error));

                }
              
}
export default new CustomerService();