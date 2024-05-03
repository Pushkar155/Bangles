import './App.css';
import Navbar from './components/navbar/Navbar';
import Filter from './components/filter/Filter';
import Cards from './pages/cards/Cards';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Filter/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
