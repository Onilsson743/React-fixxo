import React from 'react'
import FlashSaleBig from './SmallComponents/FlashSaleBig'
import ProductCard from './SmallComponents/ProductCard'

const FlashSaleLower = () => {
  return (
    <div className='_center'>
        <div className='flashsalelower _container'>
            <section className='grid'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </section>
            <FlashSaleBig />
        </div>
        
    </div>
  )
}

export default FlashSaleLower