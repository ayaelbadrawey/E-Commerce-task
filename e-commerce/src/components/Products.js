import { Paper } from '@mui/material'
import React from 'react'
import { FaStar } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'

function Products() {
    const check = 3;
    return (
        <div>
            <Paper className="bigProd">
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
            </Paper>
        </div>
    )
}

export default Products
