import './App.css';
import Header from'./components/Header';
import Categroies from './components/Categroies';
import Products from './components/Products';

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
      <Products />
    </div>
  );
}

export default App;
