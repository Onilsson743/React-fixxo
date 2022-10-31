import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Form from '../components/SmallComponents/Form'
import ImagePreview from '../components/SmallComponents/ImagePreview'
import ProductDetailsFull from '../components/SmallComponents/ProductDetailsFull'

const FullProduct = () => {
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