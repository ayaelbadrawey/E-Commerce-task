import './App.css';
import Header from'./components/Header';
import Categroies from './components/Categroies';

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
    </div>
  );
}

export default App;
