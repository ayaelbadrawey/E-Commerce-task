import { Paper } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import ProductCard from './ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';


function Products({id,min=0,max=1000000,go=false}) {
    const [products, setProducts] = useState([]);

    const getProcucts=()=>{
        axios('http://test-api.edfa3ly.io/product').then(response => (setProducts([...response.data])));
        
    }
    useEffect(() => {
        getProcucts();
        
    },)
   

    return (
        <div>

            <Paper className="bigProd">
                <div>
                {products.map(product=>(<div key={product.id}>
                    {go ?
                     ( id === product.categoryId ?
                     (product.price>=min && product.price<=max ?
                         ( <ProductCard img={product.image} name={product.name} rate={product.rating} price={product.price} ></ProductCard>) 
                         :(<h1></h1>))
                         :(<h1></h1>)
                         )
                         :( id === product.categoryId ?
                             (<ProductCard img={product.image} name={product.name} rate={product.rating} price={product.price}/> )
                  :(<h1></h1>)
                  )}  
                 </div>))} 
                </div>
            </Paper>
        </div>
    )
}

export default Products
