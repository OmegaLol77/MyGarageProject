
import React, { useEffect, useState } from 'react'
import ReportService from"./ReportService";
import { useHistory} from "react-router-dom";


export default function WorkerCarReport() {
    const [description,setreportcard] = useState("");
    const [CarNum,setcarnumber] = useState(0);
    const [date,setdate] = useState("");
    let history =useHistory();

//     const deleteClick= e =>{
// ReportService.DeleteReport(CarNum);
//     }
//     const updateClick =e=>{
//         ReportService.updateReport(CarNum,description);
//     }

    const current = new Date();
    const currdate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const refreshPage = () => {
        window.location.reload(false);
      }

    const handleOnClick = e => {
        e.preventDefault();
        console.log(description);
        console.log(CarNum);
        //fix the then and see in the Backend why the BL of the report have to print the x to insert a row
        ReportService.AddReport(CarNum,description);//then( props => {props==true ? history.push("/"): alert("You are not a customer please Sign-up")}).catch();
        setTimeout(() => refreshPage(),1000);
    }
  return (
    <div className='center'>
        <h2>Report Card</h2>
        <div className='inputcontent'>
            <p>Car Number:</p>
            <input type="number" id='carnumber' placeholder='example: 50643445' value={CarNum} onChange={ (e) => setcarnumber(e.target.value)}></input>
        </div>
        <div className='inputcontent'>
            <p>Date:</p>
            <input type="text" id='carnumber' value={currdate} onChange={(e) => setdate(e.target.value)}></input>
        </div>
        <div className='inputcontent'>
            <p>Report : </p>
            <textarea id='textarea' onChange={(e) => setreportcard(e.target.value)}/>
        </div>
        <button className='button' onClick={handleOnClick}>Create</button>
    </div>
  )
}
