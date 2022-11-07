import React, { useContext } from 'react'
import FlashSaleBig from './SmallComponents/FlashSaleBig'
import ProductCard from './SmallComponents/ProductCard'
import ProductContext from '../data/productContext'

const FlashSaleLower = () => {

  const products = (useContext(ProductContext).products.all).slice(12,16)


  return (
    <div className='_center'>
        <div className='flashsalelower _container'>
            <section className='grid'>
              {
                products.map(products => <ProductCard key={products.articleNumber} item={products} />)
              }
                
            </section>
            <FlashSaleBig />
        </div>
        
    </div>
  )
}

export default FlashSaleLower