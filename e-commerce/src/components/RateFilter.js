import { Paper } from '@mui/material'
import React from 'react'
import './style.css'
import { FaStar } from 'react-icons/fa';


function RateFilter() {
    const check =3;
    return (
        <div>
            <Paper className="ratefilter" variant="outlined">
                <p className="title" style={{paddingTop:"10px", paddingLeft:"10px"}}>Average Rating</p>
                 <div style={{paddingLeft:"65px"}}>
                    <FaStar style={{color:"yellow"}}/>
                    {check>=2? (<FaStar style={{color:"yellow"}}/>):( <FaStar />)}
                    {check>=3? (<FaStar style={{color:"yellow"}}/>):( <FaStar />)}
                    {check>=4? (<FaStar style={{color:"yellow"}}/>):( <FaStar />)}
                    {check>=5? (<FaStar style={{color:"yellow"}}/>):( <FaStar />)}
                    </div> 
                    
            </Paper>
        </div>
    )
}

export default RateFilter
