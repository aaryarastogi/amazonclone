import './App.css';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Product from './Components/Product';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
