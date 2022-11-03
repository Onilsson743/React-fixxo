import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './views/Contact';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Categories from './views/Categories';
import FullProduct from './views/FullProductView';
import { createContext, useEffect, useState } from 'react';
import ProductContext from './data/productContext'


function App() {

  
  const [products,setProducts] = useState({
    all: [],
    shoppingCart: []
  })

  // setInterval(() => {
  //   console.log(products)
  // }, 20000);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
  //     setProducts(result.json())
  //   }
  //   fetchData();
  // },[productss])

  // const productApi = 'https://win22-webapi.azurewebsites.net/api/products'

  async function FetchProducts() {
    const response = await fetch('https://win22-webapi.azurewebsites.net/api/products')
    // const responseData = await response.json();
    setProducts({...products, all: await response.json()})
  }

  useEffect(() => {
    FetchProducts()
  }, [])
  
  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
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
