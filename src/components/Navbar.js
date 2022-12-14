import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import IconLinks from './SmallComponents/IconLinks'
import ProductContext from '../data/productContext'



const Navbar = () => {

  // const scrollpos = () => {
  //   let scrollposition = window.scrollY;
  //   const navbar = document.getElementById('navbar');
  //   if (scrollposition > 950) {
  //     navbar.classList.add("navbar-white");
  //   } else {
  //     navbar.classList.remove("navbar-white")
  //   }
  //   console.log(scrollposition);
  // }

  // setInterval(scrollpos, 1000)
  

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const handleClick = () => {
    // console.log(shoppingCart)
    console.log(localStorage.length)
    localStorage.clear()
    console.log("cleared")
    // console.log(localStorage)
  }

  const shoppingCart = useContext(ProductContext).shoppingCart
  console.log(shoppingCart)
  const numbers = shoppingCart.length
  let amount = 0
  shoppingCart.map(e => {
    amount = amount + e.quantity
  })
  

  return (
    <div id='navbar' className='top-navbar '>
      <div className='_container _navbar'>
        
        <h1 onClick={handleClick} className='logo'>Fixxo.</h1>
        
        <section className={`navbar-menu ${showMenu ? "display" : ""}`} >
          <NavLink className='navbar-link' to='/' end>Home</NavLink>
          <NavLink className='navbar-link' to='/Categories' end>Categories</NavLink>
          <NavLink className='navbar-link' to='/Products' end>Products</NavLink>
          <NavLink className='navbar-link' to='/contacts' end>Contacts</NavLink>
        </section>

        <section className='navbar-icons'>
          <IconLinks link = "/serch"  icon = "fa-regular fa-magnifying-glass" />
          <IconLinks hideMobile = {true} link = "/serch" icon = "fa-regular fa-arrows-repeat" />
          <IconLinks hideMobile = {true} link = "/serch" icon = "fa-regular fa-heart" number={"10"} />
          <IconLinks link = "/shoppingcart" icon = "fa-regular fa-bag-shopping" number={amount} />
          <button className={`mobile-menu ${showMenu ? "mobile-menu-open" : ""}`} onClick={toggleMenu}></button>
        </section>

        
        
      </div>
    </div>
  )
}

export default Navbar