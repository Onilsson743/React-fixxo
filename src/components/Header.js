import React from 'react'
import LeftImg from '../images/banner-img-left.svg'
import RightImg from '../images/banner-img-right.svg'

const Header = () => {
  return (
    <div className='header'>
      <img src={LeftImg} alt="Left Image" />
      <section class="header-text">
          <h1>SALE UP</h1>
          <h1>To 50% Off</h1>
          <p>Online shopping free home delivery over $100</p>
          <button class="button-theme">SHOP NOW</button>
      </section>
      <img src={RightImg} alt="Right Image" />
    </div>
  )
}

export default Header