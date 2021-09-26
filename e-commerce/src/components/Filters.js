import { Paper } from '@mui/material'
import React from 'react'
import ColorFilter from './ColorFilter'
import PriceFilter from './PriceFilter'
import RateFilter from './RateFilter'
import './style.css'

function Filters() {
    return (
        <div>
            <Paper className="filters" >
            <p className="filter">Filters</p>
                <PriceFilter />
                <ColorFilter />
                {/* <RateFilter /> */}
            </Paper>
        </div>
    )
}

export default Filters
