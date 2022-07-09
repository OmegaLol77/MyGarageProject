import axios from 'axios';
import React from "react";
const ADMIN_REST_API_URL='http://localhost:8080/';

class AdminService{
        
    //contiune the validation of the user name and the passWord :)
    CheckAdmin( Email,Password ){
         const data=[];
         const y={answer:false};
         const z=[];

     return  axios.get(ADMIN_REST_API_URL+'Admin'+'/'+`${Email}`+'/findAdminByEmail').then((response)=>{
    
                    data[0]=response.data;
                 return y.answer=Password==data[0].password;
            }).then(function(response) {
                z[0]=response;
              return  z[0];
            })
            
        
        }
    }
    export default new AdminService();