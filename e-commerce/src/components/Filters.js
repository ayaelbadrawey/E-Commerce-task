import { Paper } from '@mui/material';
import React, { useEffect, useState }from 'react';
import axios from 'axios';
import RateFilter from './RateFilter';
import './style.css';


function useFilters() {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1000000);
    const [go, setGo] = useState(false);
    const [go2, setGo2] = useState(false);
    const [go3, setGo3] = useState(false);
    const [markedColor, setMarkedColor] = useState('');
    const [writtenColor, setWrittenColor] = useState(''); 
    const [markedColors, setMarkedColors] = useState(['']); 
    const [star, setStar] = useState(1);

    const colors = ['black', 'white', 'cyan', 'silver', 'gold', 'lavender', 'orchid', 'maroon', 'yellow', 'mint green', 'fuchsia', 'ivory', 'teal', 'blue', 'red', 'green', 'olive', 'orange', 'salmon', 'indigo', 'azure', 'turquoise', 'purple', 'magenta', 'plum', 'pink', 'violet', 'grey', 'sky blue', 'lime', 'tan'];

    const handleChange1 = (e) =>{
        setMin(e.target.value);
    }
    const handleChange2 = (e) => {
        setMax(e.target.value);
    }
    const goUpdate = () =>{
        setGo(true);
    }
    const handleChange3 = (e) => {
        setMarkedColor(e.target.value);
        store(markedColor);
    }
    const handleChange4 =(e) => {
        setWrittenColor(e.target.value);
        store(writtenColor);
    }
    const store = (color) =>{
        setMarkedColors(markedColors => [...markedColors, color]);
        setGo2(true);
    }
    const handleChange5 = (e) => {
        setStar(e.target.value);
        setGo3(true);
    }

    return{ 
        min, max, go, go2, go3, markedColors, star,
        render:(
        
        <div>
            <Paper className="filters" >
            <p className="filter">Filters</p>
            <Paper className="pricefilter" variant='outlined' >
                <p className="title">Price Range</p>
                <div style={{display: "flex"}}>
                <input className="input" placeholder="Min" type="number" value={min} onChange={handleChange1} />
                <input className="input" placeholder="Max" type="number" value={max} onChange={handleChange2}/>
                </div>
                <button className="update" type="submit" onClick={goUpdate}>Update</button>
            </Paper>
            <Paper className="colorfilter" variant="outlined">
                <p className="title" style={{paddingTop:"10px",paddingLeft:"10px"}}>Color</p>  
                <div> 
                <input className="search" type="text" placeholder="Enter color" value={writtenColor} onChange={handleChange4} ></input> 
                <br></br>
                {colors.map(color=>(<div>
                    <input className="check" type="checkbox" value={color} onClick={handleChange3}></input>
                    <label style={{padding:"5px"}} >{color}</label>
                </div>))}
                    <p className="fav">Choose your fav!</p>
                </div>
            </Paper>
            <Paper className="ratefilter" variant="outlined">
                <p className="title" style={{paddingTop:"10px",paddingLeft:"10px"}}>Average Rating</p>
                <form style={{paddingLeft:"15px"}}>
                    <fieldset>
                        <span class="star-cb-group">
                        <input type="radio" id="rating-5" name="rating" value="5" onClick={handleChange5}/>
                        <label for="rating-5">5</label>
                        <input type="radio" id="rating-4" name="rating" value="4" onClick={handleChange5}/>
                        <label for="rating-4">4</label>
                        <input type="radio" id="rating-3" name="rating" value="3" onClick={handleChange5}/>
                        <label for="rating-3">3</label>
                        <input type="radio" id="rating-2" name="rating" value="2" onClick={handleChange5}/>
                        <label for="rating-2">2</label>
                        <input type="radio" id="rating-1" name="rating" value="1" onClick={handleChange5}/>
                        <label for="rating-1">1</label>
                        <input type="radio" id="rating-0" name="rating" value="0" class="star-cb-clear" />
                        <label for="rating-0">0</label>
                        </span>
                    </fieldset>
                    </form>
            </Paper>
            </Paper>
        </div>
    )}
}

export default useFilters
