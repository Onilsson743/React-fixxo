import React from 'react'

const ProductCardHorizontal = () => {
  return (
    <div className='_containersmall productcardhorizontal'>
        <div className='img-box'></div>
        <section className='description'>
            <p>Category</p>
            <h6>Modern Black </h6>
            <h6>Blouse</h6>
            <span class="star-rating">
                <i class="fa-sharp fa-solid fa-star"></i>
                <i class="fa-sharp fa-solid fa-star"></i>
                <i class="fa-sharp fa-solid fa-star"></i>
                <i class="fa-sharp fa-solid fa-star"></i>
                <i class="fa-sharp fa-solid fa-star"></i>
            </span>
            <h5>$35.00</h5>
        </section>
    </div>
  )
}

export default ProductCardHorizontal