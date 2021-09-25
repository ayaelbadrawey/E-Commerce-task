import React from 'react'
import { Paper } from '@mui/material'
import { FaStar } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'
import { padding } from '@mui/system';


function ProductCard({check}) {
    return (
        <div>
            <Paper className="smallProd" elevation={1}>
                    <div>
                    <img src="" alt="img"></img>

                    <h3 className="proName">name</h3>
                    <div style={{paddingLeft:"65px"}}>
                    <FaStar style={{color:"yellow"}}/>
                    {check>=2? (<FaStar style={{color:"yellow"}}/>):( <FaStar />)}
                    {check>=3? (<FaStar style={{color:"yellow"}}/>):( <FaStar />)}
                    {check>=4? (<FaStar style={{color:"yellow"}}/>):( <FaStar />)}
                    {check>=5? (<FaStar style={{color:"yellow"}}/>):( <FaStar />)}
                    </div>
                    <h4 className="proName">$ Price</h4>
                    
                    </div>
                </Paper>            
        </div>
    )
}

export default ProductCard
