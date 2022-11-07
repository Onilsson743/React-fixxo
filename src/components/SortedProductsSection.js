import React, { useContext } from 'react'
import ProductCardHorizontal from './SmallComponents/ProductCardHorizontal'
import ProductContext from '../data/productContext'


const SortedProductsSection = () => {
    

    const latestProducts = (useContext(ProductContext).products.all).slice(0,3)
    const bestSellingProducts = (useContext(ProductContext).products.all).slice(3,6)
    const topReactedProducts = (useContext(ProductContext).products.all).slice(6,9)
    return (
        <div className='_center'>
            <div className='_containersmall sortedproductsection'>
                <div className='row'>
                    <h4>Latest Products</h4>
                    {
                        latestProducts.map(latestProducts => <ProductCardHorizontal key={latestProducts.articleNumber} item={latestProducts} />)
                    }
                    
                </div>
                <div className='row'>
                    <h4>Best Selling Products</h4>
                    {
                        bestSellingProducts.map(bestSellingProducts => <ProductCardHorizontal key={bestSellingProducts.articleNumber} item={bestSellingProducts} />)
                    }
                    
                </div>
                <div className='row'>
                    <h4>Top Reacted Products</h4>
                    {
                        topReactedProducts.map(topReactedProducts => <ProductCardHorizontal key={topReactedProducts.articleNumber} item={topReactedProducts} />)
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default SortedProductsSection