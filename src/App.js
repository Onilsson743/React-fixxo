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
 
  // const [quantity, setQuantity] = useState([])
  const addToCart = (item) => {

   
    if (shoppingCart.some(id => id.articleNumber === item.articleNumber)) {
      console.log("Already in cart")
      // const updatedCart = shoppingCart.map(e => {
      //   if (e.articleNumber === item.articleNumber) {
      //     console.log(e)
      //     return {e, quantity: item.quantity + 1}
      //   } else {
      //     return e;
      //   }
      // })
      // shoppingCart.map(object => {
      //   console.log(object)
      //   console.log(item)
       
      // }
      // )
      // console.log(updatedCart)
      // setShoppingCart(updatedCart)
    } else {
      // const cart = [item: item.quantity = 1]
      const test = shoppingCart.map(e => e)
      console.log(test)
      // console.log(item)
      setShoppingCart(current => [...current, item])
      console.log("added new")
      console.log(shoppingCart)
    }
    
    
    // console.log(shoppingCart)
  
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
