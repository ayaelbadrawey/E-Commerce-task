import { Paper } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <div>
            <p style={{marginTop:"40px",bottom: "0", width:"100%", textAlign:"center"}}>Copyright &copy; {new Date().getFullYear()} Aya Ali</p>
        </div>
    )
}

export default Footer