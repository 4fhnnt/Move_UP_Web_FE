import logo from './logo.svg';
import './App.css';
import Navigation from './components/custommer/Navigation';
import HomePage from './pages/home/HomePage';
import Footer from './components/custommer/Footer';
import Product from './pages/product/Product';



function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage/> */}
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default App;
