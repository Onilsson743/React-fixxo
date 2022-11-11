import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './views/Contact';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Categories from './views/Categories';
import FullProduct from './views/FullProductView';
import ShoppingCart from './views/ShoppingCart';
import { useContext, useEffect, useReducer, useState } from 'react';
import ProductContext from './data/productContext'
import Test from './views/Test';


function App() {

  
  const [products,setProducts] = useState({
    all: []
  })

  async function FetchProducts() {
    const response = await fetch('https://win22-webapi.azurewebsites.net/api/products')
    setProducts({...products, all: await response.json()})
  }
  

  useEffect(() => {
    FetchProducts()
  }, [])
  
  const [shoppingCart, setShoppingCart] = useState([])
  // console.log(shoppingCart)
  // console.log(products.all)
  const [quantity, setQuantity] = useState([])
  const addToCart = (item) => {

    // const inCart = shoppingCart.some(item => shoppingCart.articleNumber === item.articleNumber)
    if (shoppingCart.some(id => id.articleNumber === item.articleNumber)) {
      console.log("Already in cart")
      setQuantity(...current => [...current, ])
      localStorage.setItem(item)
    } else {
      setShoppingCart(current => [...current, item])
    }
    
    
    console.log(shoppingCart)
  
  }
  
  return (
    <BrowserRouter>
      <ProductContext.Provider value={{products, setProducts, addToCart, shoppingCart}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/contacts' element={<Contact />} />
          <Route path='/categories' element={<Categories /> } />
          <Route path='/products' element={<FullProduct /> } />
          <Route path='/shoppingcart' element={<ShoppingCart /> } />
          
        </Routes>
      </ProductContext.Provider>   
    </BrowserRouter>
  );
}

export default App;
