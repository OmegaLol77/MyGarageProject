import Service from "./Service";
import React from "react";
import OfferService from "./OfferService";
import ReportService from "./ReportService";
import { Redirect, useHistory } from 'react-router-dom';
import { BsCardText ,BsFillCheckCircleFill} from "react-icons/bs";

class WApprovedCars extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            Offer:[]
        }
    }
    
    componentDidMount(){
        OfferService.getApprovedOffers(1).then((response)=>
        {
            this.setState({Offer:response.data})
        })
    }
    Update = (ownername,ownerid,carnumber,offer,currdate,approved) =>{
        OfferService.AddOffer(ownername,ownerid,carnumber,offer,currdate,approved)
        setTimeout(() => this.refreshPage(),1000);
    }
    direct = (carnumber,path) =>{
        // make a new page to the worker where he can get the discription of a car so he can start working on it
        window.location.replace(path+'?id='+carnumber);
        setTimeout(() => this.refreshPage(),1000);
    }
    refreshPage() {
        window.location.reload(false);
      }

    render (){
        return(
            <div className="content">
                <h2>Approved Cars To Start Working On List</h2>
                <table className="styled-table" border="1">
                    <thead>
                        <tr>
                            <td>Owner Name</td>
                            <td>Car Number</td>
                            <td>Date</td>
                            <td>Done The Job</td>
                            <td>Get Car Report</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.Offer.map(
                                Offer =>
                                <tr className="active-row" key={Offer.carnumber}>
                                    <td>{Offer.ownername}</td>
                                    <td>{Offer.carnumber}</td>
                                    <td>{Offer.date}</td>
                                    <td><button className="middle" onClick={this.Update.bind(this,Offer.ownername,Offer.ownerid,Offer.carnumber,Offer.offer,Offer.currdate,3)}><BsFillCheckCircleFill/></button></td>
                                    <td><button className="middle" onClick={this.direct.bind(this,Offer.carnumber,"/CarReport")}><BsCardText/></button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        )
    }

}

export default WApprovedCars