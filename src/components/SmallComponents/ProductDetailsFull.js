import React, { useState } from 'react'

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


    const products = [
        {
            id:1,
            name: "Iphone 15",
            brand: "Apple",
            rating: 5,
            description: "Dyra som fan",
            size: ["S", "M", "L", "XL"],
            colors: ["white", "black", "red", "gold", "silver", "magenta"],
        },
        {
            id:2,
            name: "Surface Pro",
            brand: "Microsoft",
            rating: 2,
            description: "För billiga",
            size: ["S", "M", "L", "XL"],
            colors: ["white", "black", "red", "gold", "silver", "magenta"],
        },
        {
            id:3,
            name: "ScanNcut",
            brand: "Brother",
            rating: 4,
            description: "Dyra som fan",
            size: ["S", "M", "L", "XL"],
            colors: ["white", "black", "red", "gold", "silver", "magenta"],
        }
    ]
    console.log(products[0].id)
    const product1 = products[0]

return (
    <div className='productdetailsfull'>
        <h1 className='title'>{product1.name}</h1>
        <p className='idbrand'><span>ID: {product1.id}</span><span>Brand {product1.brand}</span></p>
        <span className='starrating'>
            Start rating
        </span>
        <p className='description'>Description: {product1.description}</p>
        <form>
            <span>
                <h2>Sizes:</h2>
                <span>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                </span>
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