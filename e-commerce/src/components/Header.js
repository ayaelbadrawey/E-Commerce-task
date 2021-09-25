import React from 'react'
import Paper from '@mui/material/Paper';
import './style.css';

function Header() {
    return (
        <div>
            <Paper className="head" >
                <h1 className="siteName">Our e-commerce store</h1>
            </Paper>
            <h3 className="txt">Choose one of our categroies from below</h3>
        </div>
    )
}

export default Header
