import Service from "./Service";
import React from "react";
import ReportService from "./ReportService";
import { Redirect, useHistory } from 'react-router-dom';
import { BsTrash ,BsFileEarmarkPlus} from "react-icons/bs";

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
    // refreshPage() {
    //     window.location.reload(false);
    //   }
    // deleteCar = (id) =>{
    //     Service.DeleteCar(id);
    //     this.refreshPage();
    // }
    // direct = (id,path) =>{
    //     window.location.replace(path+id);
    // }

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
                            <td>Approved</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.report.map(
                                report =>
                                <tr key={report.carNum}>
                                    <td>{report.carNum}</td>
                                    <td>{report.Descripton}</td>
                                    <td>{report.Date}</td>
                                    <td>{report.approved}</td>
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