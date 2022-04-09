import axios from 'axios';
import React from "react";

class CustomerService extends React.Component{
        constructor(props){
        super(props)
        this.state = {
            customer:[]
        }
    }
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



        AddCoustmer(){
            
        }
}
export default new CustomerService();