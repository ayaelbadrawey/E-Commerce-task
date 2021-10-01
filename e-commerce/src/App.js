import React, { useState , useEffect }from 'react';
import axios from 'axios'
import Header from'./components/Header';
import Categroies from './components/Categroies';
import Products from './components/Products';
import useFilters from './components/Filters';

function App() {
  
  const {render, min, max, go, go2, go3, markedColors, star} = useFilters()
  const [category, setCategory] = useState([]);
  const [categoryID, setCategoryID] = useState(0);

  const getCategories=()=>{
      axios('http://test-api.edfa3ly.io/category').then(response => (setCategory([...response.data])));
  }
  const getID =(id,color) =>{
      setCategoryID(0);
      setCategoryID(id);
      console.log(categoryID);
  }

  useEffect(() => {
      getCategories();
      
  },)

  return (
    
    <div>
      <Header />

      <div style={{display:"flex"}}>
        {category.map(cat=>(<div key={cat.id} onClick={ () => getID(cat.id) }>
          <Categroies name={cat.name} img={cat.image}/>
        </div>))}
      </div>

      <div style={{display:"flex"}}>
  
      <useFilters />
      {render}
      <Products id={categoryID} min={min} max={max} go={go} go2={go2} go3={go3} colors={markedColors} star={star}/>
      
      </div>

     
    </div>
  );
}

export default App;
