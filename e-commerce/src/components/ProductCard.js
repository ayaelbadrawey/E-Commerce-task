import React from 'react'
import { Paper } from '@mui/material'
import { FaStar } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'
import { padding } from '@mui/system';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router";



function ProductCard({img, name, rate, price}) {
      

    return (
        <div>
            <Paper className="smallProd" elevation={1}>
                    <div className="fixing">
                    <img className="img" src={img} alt="img"></img>

                    <h4 className="proName">{name}</h4>
                    <div style={{paddingLeft:"150px"}}>
                    <FaStar style={{color:"yellow"}}/>
                    {rate>=2? (<FaStar style={{color:"yellow"}}/>):( <FaStar />)}
                    {rate>=3? (<FaStar style={{color:"yellow"}}/>):( <FaStar />)}
                    {rate>=4? (<FaStar style={{color:"yellow"}}/>):( <FaStar />)}
                    {rate>=5? (<FaStar style={{color:"yellow"}}/>):( <FaStar />)}
                    </div>
                    <h4 className="proPrice">${price}</h4>
                    
                    
                    </div>
                </Paper>            
        </div>
    )
}

export default ProductCard
