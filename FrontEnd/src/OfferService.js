import axios from 'axios';
const CHECKEDCARS_REST_API_URL='https://backend.mygarage.link:8443/Offer/getAllCheckedCars';

class OfferService{

    getAllCheckedCars(){
        return axios.get(CHECKEDCARS_REST_API_URL);
    }
   
    AddOffer(on,oi,cn,cp){
        this.state = { 
           
            ownername:on,
            ownerid:oi,
            carnumber:cn,
            offer:cp
          
           
        }
        axios.post('https://backend.mygarage.link:8443/Offer/addOffer',this.state).then((response)=>
        {return response.data;
        },(error)=>
        console.log(error));
    }




}
export default new OfferService(); 