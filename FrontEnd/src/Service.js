import axios from 'axios';
// import http from '../http-common'
const GETCARS_REST_API_URL = 'https://178.62.86.200:8443/Car/getAllCars';
const ADDCARS_REST_API_URL = 'https://178.62.86.200:8443/Car/addCar';
const REMOVECARS_REST_API_URL = 'https://178.62.86.200:8443/Car';
const UPDATECARS_REST_API_URL = 'https://178.62.86.200:8443/Car';

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

    updateCar(on,oi,d,cn,cp,id){
        console.log(id)
        this.state = { 
            ownername:on,
            ownerid:oi,
            carnumber:cn,
            date:d,
            carproccess:cp,
            id:id
        }
        axios.post(UPDATECARS_REST_API_URL+`/${id}/updateCar`,
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