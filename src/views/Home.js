import React, { createContext, useContext, useState } from 'react'
import Sale from '../components/Sale';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import FeaturedProducts from '../components/FeaturedProducts';
import FlashSale from '../components/FlashSale';
import SupportOptions from '../components/SupportOptions';
import FlashSaleUpper from '../components/FlashSaleUpper';
import FlashSaleLower from '../components/FlashSaleLower';
import FashionFlashSale from '../components/FashionFlashSale';
import SortedProductsSection from '../components/SortedProductsSection';
import Support from '../components/Support';
import Footer from '../components/Footer';
import ProductContext from '../data/productContext';


const Home = () => {

  // var object = localStorage.getItem('productCart')
  // console.log(object)

  

  const products = useContext(ProductContext).products;
  // console.log(products)

  



  

  return (
    <div className='homeview'>
        <Navbar />
        <Header />
        <Sale />
        <FeaturedProducts  />
        <FlashSale />
        <SupportOptions />
        <FlashSaleUpper />
        <FlashSaleLower />
        <FashionFlashSale />
        <SortedProductsSection />
        <Support />
        <Footer />
    </div>
  )
}

export default Home