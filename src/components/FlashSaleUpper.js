import React from 'react'
import FlashSaleBig from './SmallComponents/FlashSaleBig'
import ProductCard from './SmallComponents/ProductCard'


const FlashSaleUpper = () => {
  return (
    <div>
        <FlashSaleBig />
        <section className='flashsaleupper'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </section>
    </div>
  )
}

export default FlashSaleUpper