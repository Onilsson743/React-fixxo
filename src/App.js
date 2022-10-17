import './App.css'
import Sale from './components/Sale';
import Header from './components/Header';
import Navbar from './components/Navbar';
import FeaturedProducts from './components/FeaturedProducts';
import FlashSale from './components/FlashSale';
import SupportOptions from './components/SupportOptions';
import FlashSaleUpper from './components/FlashSaleUpper';





function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Sale />
      <FeaturedProducts />
      <FlashSale />
      <SupportOptions />
      <FlashSaleUpper />
      <div style={{height:'200vh'}}></div>
    </div>
  );
}

export default App;
