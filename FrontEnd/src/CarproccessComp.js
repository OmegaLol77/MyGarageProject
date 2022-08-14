import Service from "./Service";
import React from "react";
import ReportService from "./ReportService";
import { Redirect, useHistory } from 'react-router-dom';
import { BsTrash ,BsFillCheckCircleFill} from "react-icons/bs";

class CarproccessComp extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            report:[]
        }
    }
    
    componentDidMount(){
        ReportService.GetNotApproved(0).then((response)=>
        {
            this.setState({report:response.data})
        })
    }

    direct = (carNum,descripton,date,approved) =>{
        ReportService.updateReport(carNum,"dododo",date,approved)
        this.refreshPage();
    }
    refreshPage() {
        window.location.reload(false);
      }


    render (){
        return(
            <div className="content">
                <h2>Not Approved Report List</h2>
                <table border="2">
                    <thead>
                        <tr>
                            <td>Car Number</td>
                            <td>Description</td>
                            <td>Date</td>
                            <td>Approve</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.report.map(
                                report =>
                                <tr key={report.carNum}>
                                    <td>{report.carNum}</td>
                                    <td>{report.descripton}</td>
                                    <td>{report.date}</td>
                                    <td><button className="middle" onClick={this.direct.bind(this,report.carNum,report.descripton,report.date,1)}><BsFillCheckCircleFill/></button></td>
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