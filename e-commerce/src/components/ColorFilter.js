import { Paper } from '@mui/material'
import React from 'react'
import './style.css'

function ColorFilter() {
    return (
        <div>
            <Paper className="colorfilter" variant="outlined">
                <p className="title" style={{paddingTop:"10px",paddingLeft:"10px"}}>Color</p>  
                <div> 
                <input className="search" type="text" placeholder="Enter color"></input> 
                <br></br>
                <input className="check"type="checkbox"></input>
                <label>Red</label>
                </div>
            </Paper>
        </div>
    )
}

export default ColorFilter
