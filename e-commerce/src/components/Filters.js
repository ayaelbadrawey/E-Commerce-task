import { Paper } from '@mui/material'
import React from 'react'
import PriceFilter from './PriceFilter'
import './style.css'

function Filters() {
    return (
        <div>
            <Paper className="filters" >
            <p className="filter">Filters</p>
                <PriceFilter />
            </Paper>
        </div>
    )
}

export default Filters
