import axios from 'axios';
// import http from '../http-common'
const GETCARS_REST_API_URL = 'http://localhost:8080/Car/getAllCars';
const ADDCARS_REST_API_URL = 'http://localhost:8080/Car/addCar';
const REMOVECARS_REST_API_URL = 'http://localhost:8080/Car';



class Service{

    getAllCars(){
        return axios.get(GETCARS_REST_API_URL);
    }
    AddCar(on,oi,d,cn,cp){
        this.state = { 
            ownername:on,
            ownerid:oi,
            carnumber:cn,
            date:d,
            carproccess:cp
        }
        axios.post(ADDCARS_REST_API_URL,
            this.state
        ).then((response)=>
        {return response.data;
        },(error)=>
        console.log(error));
    }

    DeleteCar(id){
        axios.delete(REMOVECARS_REST_API_URL+`/${id}/deleteCar`)
        .then((response)=>
            {
                console.log(response);
            },(error)=>
            console.log(error));
    }

     
    

}


export default new Service();