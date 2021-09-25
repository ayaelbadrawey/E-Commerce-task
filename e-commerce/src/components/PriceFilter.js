import { Paper } from '@mui/material'
import React from 'react'
import './style.css'

function PriceFilter() {
    return (
        <div>
            <Paper className="pricefilter" variant='outlined' >
            <p className="title">Price Range</p>
            <div style={{display: "flex"}}>
            <input className="input" placeholder="Min" type="number" />
            <input className="input" placeholder="Max" type="number"/>
            </div>
            <button className="update" type="submit">Update</button>
            </Paper>
            
        </div>
    )
}

export default PriceFilter
