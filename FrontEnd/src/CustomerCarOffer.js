import Service from "./Service";
import React from "react";
import ReportService from "./ReportService";
import { Redirect, useHistory } from 'react-router-dom';
import { BsTrash ,BsFillCheckCircleFill} from "react-icons/bs";
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
        OfferService.getOfferByCarnumber(id).then((response)=>
        {
            this.setState({offer:response.data})
        })
    }

    // direct = (id) =>{
    //     window.location.replace(path+'?id='+id);
    // }
    // refreshPage() {
    //     window.location.reload(false);
    //   }


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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.offer.map(
                                offer =>
                                <tr className="active-row" key={offer.carnumber}>
                                    <td>{offer.carnumber}</td>
                                    <td>{offer.currDate}</td>
                                    <td>{offer.offer}</td>
                                    {/* <td><button className="middle" onClick={this.direct.bind(this,offer.carnumber)}><BsFillCheckCircleFill/></button></td> */}
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