import React, { useState , useEffect }from 'react';
import axios from 'axios'
import './App.css';
import Header from'./components/Header';
import Categroies from './components/Categroies';
import Products from './components/Products';
import Filters from './components/Filters';

function App() {

  const [category, setCategory] = useState([]);
  const [categoryID, setCategoryID] = useState(0);
  const [color, setColor] = useState([]);


  const getCategories=()=>{
      //axios('http://test-api.edfa3ly.io/category').then(response => console.log(response));
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
        
      <Filters />
      <Products id={categoryID} />
      </div>
     
    </div>
  );
}

export default App;
