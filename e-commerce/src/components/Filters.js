import { Paper } from '@mui/material'
import React, { useEffect, useState }from 'react'
import ColorFilter from './ColorFilter'
import PriceFilter from './PriceFilter'
import RateFilter from './RateFilter'
import './style.css'
import { Link } from 'react-router-dom'
import Products from './Products'


function useFilters() {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1000000);
    const [go, setGo] = useState(false);

    const handleChange1 = (e) =>{
        setMin(e.target.value);
    }
    const handleChange2 = (e) => {
        setMax(e.target.value);
    }
    const goUpdate = () =>{
        setGo(true);
    }

    return{ 
        min, max, go, 
        render:(
        
        <div>
            <Paper className="filters" >
            <p className="filter">Filters</p>
            <Paper className="pricefilter" variant='outlined' >
                <p className="title">Price Range</p>
                <div style={{display: "flex"}}>
                <input className="input" placeholder="Min" type="number" value={min} onChange={handleChange1} />
                <input className="input" placeholder="Max" type="number" value={max} onChange={handleChange2}/>
                </div>
                <button className="update" type="submit" onClick={goUpdate}>Update</button>
            </Paper>
                {/* <PriceFilter /> */}
                <ColorFilter />
                {/* <RateFilter /> */}
            </Paper>
        </div>
    )}
}

export default useFilters
