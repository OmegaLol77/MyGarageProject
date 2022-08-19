import axios from 'axios';
// import http from '../http-common'
const GETCARS_REST_API_URL = 'https://backend.mygarage.link:8443/Car/getAllCars';
const GETCUSTOMERCARS_REST_API_URL = 'https://backend.mygarage.link:8443/Car';
const ADDCARS_REST_API_URL = 'https://backend.mygarage.link:8443/Car/addCar';
const REMOVECARS_REST_API_URL = 'https://backend.mygarage.link:8443/Car';
const UPDATECARS_REST_API_URL = 'https://backend.mygarage.link:8443/Car';
const CHECKEDCARS_REST_API_URL='https://backend.mygarage.link:8443/Car/getAllCheckedCars';
const REPAIRINGCARS_REST_API_URL='https://backend.mygarage.link:8443/Car/getAllBeingRepairedCars';
const REPAIREDCARS_REST_API_URL='https://backend.mygarage.link:8443/Car/getAllRepairedCars';



class Service{

    getAllCars(){
        return axios.get(GETCARS_REST_API_URL);
    }
//backend.mygarage.link:8443
    getCarByiId(id){
        return axios.get('https://backend.mygarage.link:8443'+`/${id}/findById`);
    }
    getCustomerCars(){
        return axios.get(GETCUSTOMERCARS_REST_API_URL+`/${localStorage.getItem("Cphonenum")}/getCustomerCars`);
    }

    getAllCheckedCars(){
        return axios.get(CHECKEDCARS_REST_API_URL);
    }

    getAllBeingRepairedCars(){
        return axios.get(REPAIRINGCARS_REST_API_URL);
    }

    getAllRepairedCars(){
        return axios.get(REPAIREDCARS_REST_API_URL);
    }

    AddCar(on,oi,d,cn,cp,pn){
        this.state = { 
            ownername:on,
            ownerid:oi,
            carnumber:cn,
            date:d,
            carproccess:cp,
            ownerPNum:pn
        }
        axios.post(ADDCARS_REST_API_URL,
            this.state
        ).then((response)=>
        {
            return response.data;
        },(error)=>
            console.log(error));
    }

    updateCar(on,oi,d,cn,cp,pn,id){
        this.state = { 
            ownername:on,
            ownerid:oi,
            carnumber:cn,
            date:d,
            carproccess:cp,
            ownerPNum:pn,
            id:id
        }
        axios.post(UPDATECARS_REST_API_URL+`/${id}/updateCar`,this.state)
        .then((response)=>{
            alert("Car Updated Successfully");
            return response.data;
        },(error)=>
            console.log(error));
    }

    DeleteCar(id){
        axios.delete(REMOVECARS_REST_API_URL+`/${id}/deleteCar`)
        .then((response)=>{
            alert("Car Deleted Successfully");
            console.log(response.data)
        },(error)=>
            console.log(error));
    }
}
export default new Service();