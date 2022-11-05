import React, { useState } from 'react'
import Product from '../../data/products.json';
import StarRating from './StarRating';

const ProductDetailsFull = (data) => {

    const [amount, setAmount] = useState(0);

    const increase = (e) => {
        e.preventDefault();
        setAmount(amount + 1);
    }
    const decrease = (e) => {
        e.preventDefault();
        if (amount > 0) {
            setAmount(amount - 1);
        }
    }
    
    const product = Product[0]
    const sizes = product.size
    const colors = product.colors

return (
    <div className='productdetailsfull'>
        <h1 className='title'>{product.name}</h1>
        <p className='idbrand'><span>ID: {product.id}</span><span>Brand {product.brand}</span></p>
        <span className='starrating'>
            <StarRating number={product.rating} />
        </span>
        <p className='description'>Description: {product.description}</p>
        <form>
            <span>
                <h2>Sizes:</h2>
                <span>
                    {
                        sizes.map(sizes => <button key={sizes}>{sizes}</button>)
                    }
                </span>
            </span>
            <span>
                <h2>Color:</h2>
                <select>
                    {
                        colors.map(colors => <option key={colors} value={colors}>{colors}</option>)
                    }
                </select>
            </span>
            <span>
                <h2>Qty:</h2>
                <section><button onClick={decrease}>-</button><span>{amount}</span><button onClick={increase}>+</button></section>
                <button type='submit' className='button-theme'>ADD TO CART</button>
            </span>
        </form>
        <span> 
            <h2>Share</h2>
            all icons
        </span>
        
    </div>
  )
}

export default ProductDetailsFull