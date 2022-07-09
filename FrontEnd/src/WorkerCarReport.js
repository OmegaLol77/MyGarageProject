
import React, { useState } from 'react'

export default function WorkerCarReport() {
    const [reportcard,setreportcard] = useState("");
    const [carnumber,setcarnumber] = useState("");

    const handleOnClick = e => {
        e.preventDefault();
        console.log(reportcard);
        console.log(carnumber);
      };
  return (
    <div className='center'>
        <h2>Report Card</h2>
        <div className='inputcontent'>
            <p>Car Number:</p>
            <input type="text" id='carnumber' placeholder='example: 50643445' value={carnumber} onChange={ (e) => setcarnumber(e.target.value)}></input>
        </div>
        <div className='inputcontent'>
            <p>Report : </p>
            <textarea id='textarea' onChange={(e) => setreportcard(e.target.value)}/>
        </div>
        <button className='button' onClick={handleOnClick}>Create</button>
    </div>
  )
}
