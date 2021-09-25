import React from 'react'
import { Paper } from '@mui/material'
import { FaStar } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'


function ProductCard({check}) {
    return (
        <div>
            <Paper className="smallProd" elevation={1}>
                    <div>
                    <h2>image</h2>
                    <h3>name</h3>
                    <FaStar style={{color:"yellow"}}/>
                    {check>=2? (<FaStar style={{color:"yellow"}}/>):( <FaStar />)}
                    {check>=3? (<FaStar style={{color:"yellow"}}/>):( <FaStar />)}
                    {check>=4? (<FaStar style={{color:"yellow"}}/>):( <FaStar />)}
                    {check>=5? (<FaStar style={{color:"yellow"}}/>):( <FaStar />)}
                    <h4>$ Price</h4>
                    </div>
                </Paper>            
        </div>
    )
}

export default ProductCard
