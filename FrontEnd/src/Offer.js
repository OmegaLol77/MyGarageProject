import axios from 'axios';
import React, { useEffect,useState } from 'react'
import OfferService from './OfferService';
import Popup from './PopUp';
import Async from 'react-async'

class Offer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cars:[]
        }
    }

    getAllCheckedCars(){
        OfferService.getAllCheckedCars().then((response)=>
        {
        this.setState({cars:response.data})
    })
}
render (){
    return(
        <div className="content">
            <h2>Cars List</h2>
            <table border="2">
                <thead>
                    <tr>
                        <td>Car ID</td>
                        <td>Owner Name</td>
                        <td>Owner ID</td>
                        <td>Car Number</td>
                        <td>Date</td>
                        <td>Car Proccess</td>
                        <td>Delete Car</td>
                        <td>Update Car</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.cars.map(
                            cars =>
                            <tr key={cars.id}>
                                <td>{cars.id}</td>
                                <td>{cars.ownername}</td>
                                <td>{cars.ownerid}</td>
                                <td>{cars.carnumber}</td>
                                <td>{cars.date}</td>
                                <td>{cars.carproccess}</td>
                                {/* <td><button className="middle" onClick={this.deleteCar.bind(this, cars.id)}><BsTrash/></button></td>
                                <td><button className="middle" onClick={this.direct.bind(this,cars.id,'/carupdate')}><BsFileEarmarkPlus/></button></td> */}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>

    )
}
}
export default Offer