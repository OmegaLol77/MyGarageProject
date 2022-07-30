// import Service from "./Service"
import React from "react";
import {browseHistory} from "react-router";
import CarComponent from "./CarComponent"
import SideNavbar from './SideNavbar';

export  default class CarList extends React.Component{

render() {

    return (
        <div>
            <p>user id : {this.props.params.id}</p>
           <div className="side-navbar">
            <SideNavbar />
            </div>
        </div>
    
);
}
}