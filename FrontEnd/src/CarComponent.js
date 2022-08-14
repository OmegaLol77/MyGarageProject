import Service from "./Service";
import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import { BsTrash ,BsFileEarmarkPlus} from "react-icons/bs";



class CarComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            carproccess:"",
            cars:[]
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount(){
        Service.getAllCars().then((response)=>
        {
            this.setState({cars:response.data})
        })
    }
    // componentDidMount1(){
    //     Service.getAllCars().then((response)=>
    //     {
    //         this.setState({cars:response.data})
    //     })
    // }
    refreshPage() {
        window.location.reload(false);
      }
    deleteCar = (id) =>{
        Service.DeleteCar(id);
        this.refreshPage();
    }
    direct = (id,path) =>{
        window.location.replace(path+'?id='+id);
    }

    handleChange(event) {
        this.setState({carproccess: event.target.value});
        if(this.state.carproccess=="Car is Checked"){
            Service.getAllCheckedCars().then((response)=>
            {
                this.setState({cars:response.data})
            })
        }
        if(this.state.carproccess=="Car Being Repaired"){
            Service.getAllBeingRepairedCars().then((response)=>
            {
                this.setState({cars:response.data})
            })
        }
        if(this.state.carproccess=="Car Repairing Done"){
            Service.getAllRepairedCars().then((response)=>
            {
                this.setState({cars:response.data})
            })
        }
        console.log(this.state.carproccess)
    }

    render (){
        return(
            <div>
            <div className="content">
                <h2>Cars List</h2>
                <div className='inputcontent'>
                    <p>Car Proccess:</p>
                    <select type="SelectList" id='carproccess' defaultValue={this.state.carproccess} onChange={this.handleChange}>
                        <option value="option 1">Please Select An Option</option>
                        <option value="Car is Checked">Car is Checked</option>
                        <option value="Car Being Repaired">Car Being Repaired</option>
                        <option value="Car Repairing Done">Car Repairing Done</option>
                    </select>
                </div>
                <table border="2">
                    <thead>
                        <tr>
                            <td>Car ID</td>
                            <td>Owner Name</td>
                            <td>Owner ID</td>
                            <td>Owner Phone Number</td>
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
                                    <td>{cars.ownerPNum}</td>
                                    <td>{cars.carnumber}</td>
                                    <td>{cars.date}</td>
                                    <td>{cars.carproccess}</td>
                                    <td><button className="middle" onClick={this.deleteCar.bind(this, cars.id)}><BsTrash/></button></td>
                                    <td><button className="middle" onClick={this.direct.bind(this,cars.id,'/carupdate')}><BsFileEarmarkPlus/></button></td>
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

export default CarComponent