import React, { useEffect,useState } from 'react'
import OfferService from './OfferService';
import { BsTrash ,BsFileEarmarkPlus} from "react-icons/bs";


class Offer extends React.Component{
   
    constructor(props){
        super(props)
        this.state = {
            cars:[]
        }
    }
    
    componentDidMount(){
        OfferService.getAllCheckedCars().then((response)=>
        {
            
            this.setState({cars:response.data})
        })
    }
    refreshPage() {
        window.location.reload(false);
      }
   
    direct = (id,path) =>{
        window.location.replace(path+'?id='+id);
    }

    render (){
        return(
            <div>
            <div className="content">
                <h2>Cars List Which Needs An Offer</h2>
                <table className='styled-table' border="1">
                    <thead>
                        <tr>
                            <td>Car ID</td>
                            <td>Owner Name</td>
                            <td>Owner ID</td>
                            <td>Owner Phone Number</td>
                            <td>Car Number</td>
                            <td>Date</td>
                            <td>Car Proccess</td>
                            <td>Offer</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.cars.map(
                                cars =>
                                <tr className='active-row' key={cars.id}>
                                    <td>{cars.id}</td>
                                    <td>{cars.ownername}</td>
                                    <td>{cars.ownerid}</td>
                                    <td>{cars.ownerPNum}</td>
                                    <td>{cars.carnumber}</td>
                                    <td>{cars.date}</td>
                                    <td>{cars.carproccess}</td>
                                    <td><button className="middle" onClick={this.direct.bind(this,cars.carnumber,'/CreateOffer')}>Create Offer</button></td>
                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            </div>

        )
    }

}
export default Offer