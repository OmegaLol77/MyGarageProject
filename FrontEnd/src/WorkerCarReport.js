
import React, { useEffect, useState } from 'react'
import ReportService from"./ReportService";
import { useHistory} from "react-router-dom";



export default function WorkerCarReport() {
    const [description,setreportcard] = useState("");
    const [CarNum,setcarnumber] = useState("");
    let history =useHistory();

    const deleteClick= e =>{
ReportService.DeleteReport(CarNum);
    }
    const updateClick =e=>{
        ReportService.updateReport(CarNum,description);
    }

    const handleOnClick = e => {
        e.preventDefault();
        console.log(description);
        console.log(CarNum);
        //fix the then and see in the Backend why the BL of the report have to print the x to insert a row
        ReportService.AddReport(CarNum,description);//then( props => {props==true ? history.push("/"): alert("You are not a customer please Sign-up")}).catch();
        
      }
  return (
    <div className='center'>
        <h2>Report Card</h2>
        <div className='inputcontent'>
            <p>Car Number:</p>
            <input type="text" id='carnumber' placeholder='example: 50643445' value={CarNum} onChange={ (e) => setcarnumber(e.target.value)}></input>
        </div>
        <div className='inputcontent'>
            <p>Report : </p>
            <textarea id='textarea' onChange={(e) => setreportcard(e.target.value)}/>
        </div>
        <button className='submit' onClick={handleOnClick}>Create</button>
        <br></br>
        <button className='submit' onClick={deleteClick}>delete</button>
        <br></br>
        <button className='submit' onClick={updateClick}>update</button>
    </div>
  )
}
