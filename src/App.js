import './App.css'
import Sale from './components/Sale';
import Header from './components/Header';
import Navbar from './components/Navbar';
import FeaturedProducts from './components/FeaturedProducts';





function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Sale />
      <FeaturedProducts />

      <div style={{height:'200vh'}}></div>
    </div>
  );
}

export default App;
