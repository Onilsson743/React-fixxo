import React from 'react'

const ProductCard = () => {
  return (
    <div class="product-card">
        <div class="img-window">
            <div class="icons">
                <a class="icon-links"><i class="fa-regular fa-code-compare"></i></a>
                <a class="icon-links"><i class="fa-regular fa-heart"></i></a>
                <a class="icon-links"><i class="fa-regular fa-bag-shopping"></i></a>
            </div>
            <button class="button-theme">Quick View</button>
        </div>
        <p>Category</p>
        <h5>Modern Black Blouse</h5>
        <span class="star-rating">
            <i class="fa-sharp fa-solid fa-star"></i>
            <i class="fa-sharp fa-solid fa-star"></i>
            <i class="fa-sharp fa-solid fa-star"></i>
            <i class="fa-sharp fa-solid fa-star"></i>
            <i class="fa-sharp fa-solid fa-star"></i>
        </span>
        <h5>$35.00</h5>
    </div>
  )
}

export default ProductCard