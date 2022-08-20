import Service from "./Service";
import React from "react";
import ReportService from "./ReportService";
import { Redirect, useHistory } from 'react-router-dom';
import { BsCardText ,BsFillCheckCircleFill} from "react-icons/bs";

class WSpecificCarReport extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            Offer:[]
        }
    }
    
    componentDidMount(){
        let url = window.location.href;
        let neurl = new URL(url);
        let id = neurl.searchParams.get('id');
        ReportService.GetSpecificReport(id).then((response)=>
        {
            this.setState({Offer:response.data})
        })
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
                            <td>Car Number</td>
                            <td>Description</td>
                            <td>Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.Offer.map(
                                Offer =>
                                <tr className="active-row" key={Offer.carNum}>
                                    <td>{Offer.carNum}</td>
                                    <td>{Offer.descripton}</td>
                                    <td>{Offer.date}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        )
    }

}

export default WSpecificCarReport