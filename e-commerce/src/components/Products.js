import { Paper } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import ProductCard from './ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';


function Products({id}) {
    const [products, setProducts] = useState([]);

    const getProcucts=()=>{
        axios('http://test-api.edfa3ly.io/product').then(response => (setProducts([...response.data])));
        
    }
    useEffect(() => {
        getProcucts();
        
    },)
    const check = 3;
    return (
        <div>

            <Paper className="bigProd">
                <div style={{display:"flex"}}>
                {products.map(product=>(<div key={product.id}>
                    {id === product.categoryId ? (  <ProductCard img={product.image} name={product.name} rate={product.rating} price={product.price}/> )
                 :<h1></h1>}  
                </div>
                ))}
                </div>
            </Paper>
        </div>
    )
}

export default Products
