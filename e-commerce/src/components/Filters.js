import { Paper } from '@mui/material'
import React, { useState }from 'react'
import ColorFilter from './ColorFilter'
import PriceFilter from './PriceFilter'
import RateFilter from './RateFilter'
import './style.css'
import {Link,Router} from 'react-router-dom'

function Filters() {
    const [min, setMin] = useState();
    const [max, setMax] = useState();
    const [go, setGo] = useState(false);

    const handleChange1 = (e) =>{
        setMin(e.target.value);
        console.log(min);
    }
    const handleChange2 = (e) => {
        setMax(e.target.value);
        console.log(max);
    }
    const goUpdate = () =>{
        setGo(true);
    }

    return (
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
    )
}

export default Filters
