import Service from "./Service";
import React from "react";
import { Redirect, useHistory } from 'react-router-dom';
import { BsTrash ,BsFileEarmarkPlus} from "react-icons/bs";

class MyCustomerCarList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            cars:[]
        }
    }
    
    componentDidMount(){
        Service.getCustomerCars().then((response)=>
        {
            this.setState({cars:response.data})
        })
    }
    refreshPage() {
        window.location.reload(false);
      }

    render (){
        return(
            <div>
            <div className="content">
                <h2>Cars List</h2>
                <table className="styled-table" border="1">
                    <thead>
                        <tr>
                            <td>Car ID</td>
                            <td>Owner Name</td>
                            <td>Owner ID</td>
                            <td>Phone Number</td>
                            <td>Car Number</td>
                            <td>Date</td>
                            <td>Car Proccess</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.cars.map(
                                cars =>
                                <tr className="active-row" key={cars.id}>
                                    <td>{cars.id}</td>
                                    <td>{cars.ownername}</td>
                                    <td>{cars.ownerid}</td>
                                    <td>{cars.ownerPNum}</td>
                                    <td>{cars.carnumber}</td>
                                    <td>{cars.date}</td>
                                    <td>{cars.carproccess}</td>
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

export default MyCustomerCarList