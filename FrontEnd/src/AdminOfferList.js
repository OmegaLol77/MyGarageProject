import React from 'react'
import OfferService from "./OfferService";


class AdminOfferList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            carnumber:"",
            offer:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }
    
    componentDidMount(){
        OfferService.getApprovedOffers(3).then((response)=>
        {
            this.setState({offer:response.data})
        })
    }

    handleChange(event) {
        this.setState({carnumber: event.target.value});
    }

    handleFilter(carnum){
        if(this.state.carnumber===""){
            OfferService.getApprovedOffers(3).then((response)=>
            {
                this.setState({offer:response.data})
            })
        }
        else if(this.state.carnumber.length===7 || this.state.carnumber.length===8){
            OfferService.findFinishedOffers(this.state.carnumber).then((response) =>
            {
                this.setState({offer:response.data})
            })
        }else{
            alert("The Car Number Is Wrong Please Check Number")
        }
    }

    render (){
        return(
            <div>
            <div className="content">
                <h2>Finished Offers List</h2>
                <div className='inputcontent'>
                    <a>Car Number:
                        <br></br> 
                        <input type="text" id="carnumber"  placeholder="Car Number" defaultValue={this.state.carnumber} onChange={this.handleChange}></input>
                    </a>
                    <button className="button" onClick={this.handleFilter}>Search</button>
                </div>
                <table className="styled-table" border="1">
                    <thead>
                        <tr>
                            <td>Car Number</td>
                            <td>Owner Name</td>
                            <td>Owner ID</td>
                            <td>Offer</td>
                            <td>Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.offer.map(
                                offer =>
                                <tr className="active-row" key={offer.carnumber}>
                                    <td>{offer.carnumber}</td>
                                    <td>{offer.ownername}</td>
                                    <td>{offer.ownerid}</td>
                                    <td>{offer.offer}</td>
                                    <td>{offer.date}</td>
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

export default AdminOfferList