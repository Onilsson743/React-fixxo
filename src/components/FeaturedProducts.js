import React from 'react'
import ProductCard from './SmallComponents/ProductCard'

const FeaturedProducts = () => {
  return (
    <section className='featured-products'>
        <h4>Featured Products</h4>
        <div className='grid'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </section>
  )
}

export default FeaturedProducts