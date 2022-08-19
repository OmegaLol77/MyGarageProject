import Service from "./Service";
import React from "react";
import ReportService from "./ReportService";
import { Redirect, useHistory } from 'react-router-dom';
import { BsFillXCircleFill ,BsFillCheckCircleFill} from "react-icons/bs";
import OfferService from "./OfferService";

class CustomerCarOffer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            offer:[]
        }
    }
    
    componentDidMount(){
        let url = window.location.href;
        let neurl = new URL(url);
        let id = neurl.searchParams.get('carnum');
        OfferService.getMyOffers(id).then((response)=>
        {
            this.setState({offer:response.data})
        })
    }

    approve = (offer) =>{
        OfferService.AddOffer(offer.ownername,offer.ownerid,offer.carnumber,offer.offer,offer.date,1);
        setTimeout(() => this.refreshPage(),1000);
    }
    decline = (offer) =>{
        OfferService.AddOffer(offer.ownername,offer.ownerid,offer.carnumber,offer.offer,offer.date,2);
        setTimeout(() => this.refreshPage(),1000);
    }
    refreshPage() {
        window.location.reload(false);
      }


    render (){
        return(
            <div className="content">
                <h2>Not Approved Report List</h2>
                <table className="styled-table" border="1">
                    <thead>
                        <tr>
                            <td>Car Number</td>
                            <td>Date</td>
                            <td>Offer</td>
                            <td>Approve</td>
                            <td>Decline</td>
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
                                    <td><button className="middle" onClick={this.approve.bind(this,offer)}><BsFillCheckCircleFill/></button></td>
                                    <td><button className="middle" onClick={this.decline.bind(this,offer)}><BsFillXCircleFill/></button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        )
    }

}

export default CustomerCarOffer