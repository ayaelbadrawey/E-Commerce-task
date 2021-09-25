import { Paper } from '@mui/material'
import React from 'react'
import './style.css'
import ProductCard from './ProductCard';

function Products() {
    const check = 3;
    return (
        <div>
            <Paper className="bigProd">
                <div style={{display:"flex"}}>
                <ProductCard check={check}/>
                <ProductCard check={check}/>
                </div>
            </Paper>
        </div>
    )
}

export default Products
