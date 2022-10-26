import React, { useState } from 'react'

const ProductDetailsFull = () => {

    const [amount, setAmount] = useState(0);

    const increase = (e) => {
        e.preventDefault();
        setAmount(amount + 1);
    }
    const decrease = (e) => {
        e.preventDefault();
        setAmount(amount - 1);
    }


return (
    <div>
        <h1>Titel</h1>
        <p><span>ID</span> <span>Brand</span></p>
        <span>
            Start rating
        </span>
        <p>Description</p>
        <form>
            <span>
                <h2>Size:</h2>
                <button>Sizes buttons</button>
            </span>
            <span>
                <h2>Color:</h2>
                <input></input>
            </span>
            <span>
                <h2>Qty:</h2>
                <section><button onClick={decrease}>-</button><span>{amount}</span><button onClick={increase}>+</button></section>
                <button className='button-theme'>ADD TO CART</button>
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