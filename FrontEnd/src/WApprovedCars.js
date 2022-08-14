import Service from "./Service";
import React from "react";
import ReportService from "./ReportService";
import { Redirect, useHistory } from 'react-router-dom';
import { BsTrash ,BsFileEarmarkPlus} from "react-icons/bs";

class WApprovedCars extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            report:[]
        }
    }
    
    componentDidMount(){
        ReportService.GetNotApproved(1).then((response)=>
        {
            this.setState({report:response.data})
        })
    }

    // refreshPage() {
    //     window.location.reload(false);
    //   }

    render (){
        return(
            <div className="content">
                <h2>Approved Cars List</h2>
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
                            this.state.report.map(
                                report =>
                                <tr className="active-row" key={report.carNum}>
                                    <td>{report.carNum}</td>
                                    <td>{report.descripton}</td>
                                    <td>{report.date}</td>
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