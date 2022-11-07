import React, { useContext } from 'react'
import ProductContext from '../data/productContext'
import FlashSaleBig from './SmallComponents/FlashSaleBig'
import ProductCard from './SmallComponents/ProductCard'


const FlashSaleUpper = () => {

  const products = (useContext(ProductContext).products.all).slice(8,12)

  return (
    <div className='_center'>
        <div className='_container flashsaleupper'>
            <FlashSaleBig />
            <section className='grid'>
              {
                products.map(products => <ProductCard key={products.articleNumber} item={products} />) 
              }
            </section>
        </div>
    </div>
  )
}

export default FlashSaleUpper