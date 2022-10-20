import React from 'react'
import FlashSaleBig from './SmallComponents/FlashSaleBig'
import ProductCard from './SmallComponents/ProductCard'


const FlashSaleUpper = () => {
  return (
    <div className='_center'>
        <div className='_container flashsaleupper'>
            <FlashSaleBig />
            <section className='grid'>
                {/* <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard /> */}
            </section>
        </div>
    </div>
  )
}

export default FlashSaleUpper