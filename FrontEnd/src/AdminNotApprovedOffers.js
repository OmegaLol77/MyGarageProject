import Service from "./Service";
import React from "react";
import ReportService from "./ReportService";
import { Redirect, useHistory } from 'react-router-dom';
import { BsFillXCircleFill ,BsFillCheckCircleFill} from "react-icons/bs";
import OfferService from "./OfferService";

class AdminNotApprovedOffers extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            offer:[]
        }
    }
    
    componentDidMount(){
        OfferService.getDeclinedOffers(2).then((response)=>
        {
            this.setState({offer:response.data})
        })
    }
    direct = (id,path) =>{
        window.location.replace(path+'?id='+id);
    }
    render (){
        return(
            <div className="content">
                <h2>Declined Offer List</h2>
                <table className="styled-table" border="1">
                    <thead>
                        <tr>
                            <td>Car Number</td>
                            <td>Date</td>
                            <td>Offer</td>
                            <td>Re Submit Offer</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.offer.map(
                                offer =>
                                <tr className="active-row" key={offer.carnumber}>
                                    <td>{offer.carnumber}</td>
                                    <td>{offer.date}</td>
                                    <td>{offer.offer}</td>
                                    <td><button className="middle" onClick={this.direct.bind(this,offer.carnumber,'/CreateOffer')}>Create An Offer</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AdminNotApprovedOffers