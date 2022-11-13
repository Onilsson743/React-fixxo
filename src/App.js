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
 
  const addToCart = (item) => {
    if (shoppingCart.some(id => id.articleNumber === item.articleNumber)) {
      console.log("Already in cart")
      increaseQuantity(item)
      
    } else {
      const cartItem = Object.assign(item, {quantity: 1})
      setShoppingCart(current => [...current, cartItem])
      console.log("added new")
    }  
  }

  const increaseQuantity = (item) => {
    const updatedCart = shoppingCart.map(e => {
      if (e.articleNumber === item.articleNumber) {
        console.log("added quantity")
        const cartItem = Object.assign(e, {quantity: e.quantity + 1})
        return cartItem
      } else {
        return e;
      }
    })
    setShoppingCart(updatedCart)

    
  }
  const decreaseQuantity = (item) => {
    const updatedCart = shoppingCart.map(e => {
      if (e.articleNumber === item.articleNumber) {
        if (item.quantity <= 1 ) {
          return null
        } else {
          console.log("added quantity")
          const cartItem = Object.assign(e, {quantity: e.quantity - 1})
          return cartItem
        }
      } else {
        return e;
      }
    })
    setShoppingCart(updatedCart)
  }
  
  return (
    <BrowserRouter>
      <ProductContext.Provider value={{products, setProducts, addToCart, shoppingCart, increaseQuantity, decreaseQuantity}}>
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
