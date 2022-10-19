import React from 'react'

const ProductDetailsFull = () => {
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
                <button>quantity selector</button>
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