import React from 'react'
import ProductCardHorizontal from './SmallComponents/ProductCardHorizontal'

const SortedProductsSection = () => {
  return (
    <div className='_center'>
        <div className='_containersmall sortedproductsection'>
            <div className='row'>
                <h4>Latest Products</h4>
                <ProductCardHorizontal />
                <ProductCardHorizontal />
                <ProductCardHorizontal />
            </div>
            <div className='row'>
                <h4>Latest Products</h4>
                <ProductCardHorizontal />
                <ProductCardHorizontal />
                <ProductCardHorizontal />
            </div>
            <div className='row'>
                <h4>Latest Products</h4>
                <ProductCardHorizontal />
                <ProductCardHorizontal />
                <ProductCardHorizontal />
            </div>
        </div>
    </div>
  )
}

export default SortedProductsSection