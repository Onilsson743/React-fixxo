import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './views/Contact';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Categories from './views/Categories';
import Products from './views/Products';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path='/categories' element={<Categories /> } />
        <Route path='/products' element={<Products />} />
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
