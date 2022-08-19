import axios from 'axios';
//backend.mygarage.link:8443
const CHECKEDCARS_REST_API_URL='https://backend.mygarage.link:8443/Offer/getAllCheckedCars';

class OfferService{

    getAllCheckedCars(){
        return axios.get(CHECKEDCARS_REST_API_URL);
    }

    getMyOffers(cn){
        return axios.get('https://backend.mygarage.link:8443/Offer/'+`${cn}/findMyOffers`);
    }

    getApprovedOffers(ap){
        return axios.get('https://backend.mygarage.link:8443/Offer/'+`${ap}/getApprovedOffers`);
    }

    getDeclinedOffers(ap){
        return axios.get('https://backend.mygarage.link:8443/Offer/'+`${ap}/getDeclinedOffers`);
    }
   
    AddOffer(on,oi,cn,cp,date,ap){
        this.state = { 
            ownername:on,
            ownerid:oi,
            carnumber:cn,
            offer:cp,
            date:date,
            approved:ap
        }
        //backend.mygarage.link:8443
        axios.post('https://backend.mygarage.link:8443/Offer/addOffer',this.state)
        .then((response)=>{
            console.log("offer being ccalled")
            return response.data;
        },(error)=>
            console.log(error));
    }

    UpdateOffer(on,oi,cn,cp,date,ap){
        this.state = { 
            ownername:on,
            ownerid:oi,
            carnumber:cn,
            offer:cp,
            date:date,
            approved:ap
        }
        axios.post('https://backend.mygarage.link:8443/Offer/'+`${cn}/updateOffer`,this.state)
        .then((response)=>{
            alert("Offer Updated Successfully")
            return response.data;
        },(error)=>
        console.log(error));
    }

    getOfferByCarnumber(carnum){
        return axios.get('https://backend.mygarage.link:8443/Offer/'+`${carnum}/findOfferByCarnum`);
    }
}
export default new OfferService(); 