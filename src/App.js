import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './views/Contact';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Categories from './views/Categories';
import FullProduct from './views/FullProductView';
import { useContext, useEffect, useReducer, useState } from 'react';
import ProductContext from './data/productContext'


function App() {

  
  const [products,setProducts] = useState({
    all: [],
    shoppingCart: []
  })
 
  const [test, setTest] = useState([])
  const testClick = () => {
    setTest([...test, 2])
    console.log(test)
  }
  

  async function FetchProducts() {
    const response = await fetch('https://win22-webapi.azurewebsites.net/api/products')
    setProducts({...products, all: await response.json()})
  }

  useEffect(() => {
    FetchProducts()
  }, [])

  console.log(products.shoppingCart)
  // const shoppingcart = products.shoppingCart
  
  const addToCart = (item) => {
    setProducts({...products, shoppingCart: item})
    console.log(products.shoppingCart)
    console.log(item)
  }
  
  return (
    <BrowserRouter>
      <ProductContext.Provider value={{products, setProducts, addToCart, test, setTest, testClick}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/contacts' element={<Contact />} />
          <Route path='/categories' element={<Categories /> } />
          <Route path='/products' element={<FullProduct /> } />
        </Routes>
      </ProductContext.Provider>   
    </BrowserRouter>
  );
}

export default App;
