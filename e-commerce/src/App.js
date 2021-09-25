import './App.css';
import Header from'./components/Header';
import Categroies from './components/Categroies';
import Products from './components/Products';
import Filters from './components/Filters';

function App() {
  return (
    <div>
      <Header />
      <div style={{display:"flex"}}>
      <Categroies/>
      <Categroies />
      <Categroies />
      <Categroies />
      <Categroies />
      </div>
      <div style={{display:"flex"}}>
      <Filters />
      <Products />
      </div>
    </div>
  );
}

export default App;
