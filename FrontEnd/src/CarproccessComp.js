import Service from "./Service";
import React from "react";
import { Redirect, useHistory } from 'react-router-dom';
import { BsTrash ,BsFileEarmarkPlus} from "react-icons/bs";

class CarproccessComp extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            cars:[]
        }
    }
    
    componentDidMount(){
        Service.getAllCars().then((response)=>
        {
            this.setState({cars:response.data})
        })
    }
    refreshPage() {
        window.location.reload(false);
      }
    deleteCar = (id) =>{
        Service.DeleteCar(id);
        this.refreshPage();
    }
    direct = (id,path) =>{
        window.location.replace(path+id);
    }

    render (){
        return(
            <div className="content">
                <h2>Cars List</h2>
                <table border="2">
                    <thead>
                        <tr>
                            <td>Car ID</td>
                            <td>Car Number</td>
                            <td>Car Proccess</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.cars.map(
                                cars =>
                                <tr key={cars.id}>
                                    <td>{cars.id}</td>
                                    <td>{cars.carnumber}</td>
                                    <td>{cars.carproccess}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        )
    }

}

export default CarproccessComp