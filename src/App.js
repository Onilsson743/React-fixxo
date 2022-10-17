import './App.css'
import Sale from './components/Sale';
import Header from './components/Header';
import Navbar from './components/Navbar';
import FeaturedProducts from './components/FeaturedProducts';
import FlashSale from './components/FlashSale';
import SupportOptions from './components/SupportOptions';
import FlashSaleUpper from './components/FlashSaleUpper';
import FlashSaleLower from './components/FlashSaleLower';
import FashionFlashSale from './components/FashionFlashSale';
import ProductCardHorizontal from './components/SmallComponents/ProductCardHorizontal';
import SortedProductsSection from './components/SortedProductsSection';
import Support from './components/Support';
import Footer from './components/Footer';


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
      <FlashSaleLower />
      <FashionFlashSale />
      <SortedProductsSection />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
