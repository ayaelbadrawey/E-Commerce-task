import React, { useState , useEffect }from 'react';
import Paper from '@mui/material/Paper';
import './style.css';
import axios from 'axios';


function Categroies({name, img}) {

    return (
        <div>
            <Paper className="categ">
                 <div>
                <img className="img" src={img} alt="img"></img>
                 <h4 className="categName">{name}</h4>
                </div>

            </Paper>
        </div>
    )
}

export default Categroies
