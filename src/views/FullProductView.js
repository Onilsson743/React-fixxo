import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ImagePreview from '../components/SmallComponents/ImagePreview'
import ProductDetailsFull from '../components/SmallComponents/ProductDetailsFull'
import ProductContext from '../data/productContext'

const FullProduct = () => {

  const products = (useContext(ProductContext).all).slice(0,3)
  
  localStorage.setItem('productCart',products)

  return (
    <>
      <Navbar />
      <section className='productdetails'>
        <ImagePreview />
        <ProductDetailsFull />
      </section>    
      <Footer />
      <div style={{height:"100vh"}}></div>
    </>
  )
}

export default FullProduct