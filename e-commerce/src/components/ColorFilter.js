import { Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'

function ColorFilter() {

    const [category, setCategory] = useState([]);

    const getCategories=()=>{
        axios('http://test-api.edfa3ly.io/category').then(response => (setCategory([...response.data])));  
    }
  useEffect(() => {
      getCategories();
      
  },)
    return (
        <div>
            <Paper className="colorfilter" variant="outlined">
                <p className="title" style={{paddingTop:"10px",paddingLeft:"10px"}}>Color</p>  
                <div> 
                <input className="search" type="text" placeholder="Enter color"></input> 
                <br></br>
                {category.map(cat=>(<div key={cat.id}>
                    <input className="check"type="checkbox"></input>
                    <label>{cat.color}</label>
                </div>))}
                
                </div>
            </Paper>
        </div>
    )
}

export default ColorFilter
