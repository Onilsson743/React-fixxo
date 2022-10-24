import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../images/logo.svg'
import IconLinks from './SmallComponents/IconLinks'



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
  

  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }


  

  return (
    <div id='navbar' className='top-navbar '>
      <div className='_container _navbar'>
        
        <h1 className='logo'>Fixxo.</h1>
        
        <section className={`navbar-menu ${!showMenu ? "display" : ""}`} >
          <NavLink className='navbar-link' to='/' end>Home</NavLink>
          <NavLink className='navbar-link' to='/Categories' end>Categories</NavLink>
          <NavLink className='navbar-link' to='/Products' end>Products</NavLink>
          <NavLink className='navbar-link' to='/contacts' end>Contacts</NavLink>
        </section>

        <section className='navbar-icons'>
          <IconLinks link = "/serch" icon = "fa-regular fa-magnifying-glass" />
          <IconLinks hideMobile = {true} link = "/serch" icon = "fa-regular fa-arrows-repeat" />
          <IconLinks hideMobile = {true} link = "/serch" icon = "fa-regular fa-heart" number={"10"} />
          <IconLinks link = "/serch" icon = "fa-regular fa-bag-shopping" number={"99+"} />
          <button className={`mobile-menu ${!showMenu ? "mobile-menu-open" : ""}`} onClick={toggleMenu}></button>
        </section>

        
        
      </div>
    </div>
  )
}

export default Navbar