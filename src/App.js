import logo from './logo.svg';
import './App.css';
import Navigation from './components/custommer/Navigation';
import HomePage from './pages/home/HomePage';
import Footer from './components/custommer/Footer';
// import Product from './pages/product/Product';
import ProductDetail from './pages/product/ProductDetail';



function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage/> */}
        {/* <Product /> */}
        <ProductDetail />
      </div>
      <Footer />
    </div>
  );
}

export default App;
