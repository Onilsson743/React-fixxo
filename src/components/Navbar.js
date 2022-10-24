import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../images/logo.svg'
import IconLinks from './SmallComponents/IconLinks'



const Navbar = () => {

  const scrollpos = () => {
    let scrollposition = window.scrollY;
    const navbar = document.getElementById('navbar');
    if (scrollposition > 950) {
      navbar.classList.add("navbar-white");
    } else {
      navbar.classList.remove("navbar-white")
    }
    console.log(scrollposition);
  }

  setInterval(scrollpos, 1000)
  
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);

  }


  // document.getElementById('knapp').addEventListener('click', () => {
  //   document.querySelector()
  // })


  

  return (
    <div id='navbar' className='top-navbar '>
      <div className='_container _navbar'>
        <section className='logo'>
          <h1>Fixxo.</h1>
        </section>
        <section  className={`navbar-menu ${!showMenu ? "d-none" : ""}`}>
          <NavLink className='navbar-link' to='/' end>Home</NavLink>
          <NavLink className='navbar-link' to='/Categories' end>Categories</NavLink>
          <NavLink className='navbar-link' to='/Products' end>Products</NavLink>
          <NavLink className='navbar-link' to='/contacts' end>Contacts</NavLink>
        </section>
        <section className='navbar-icons'>
          <IconLinks hideMobile = {true} link = "/serch" icon = "fa-regular fa-magnifying-glass" />
          <IconLinks hideMobile = {true} link = "/serch" icon = "fa-regular fa-arrows-repeat" />
          <IconLinks link = "/serch" icon = "fa-regular fa-heart" number={"10"} />
          <IconLinks link = "/serch" icon = "fa-regular fa-bag-shopping" number={"99+"} />

          <button id='knapp' className='icon-links' onClick={toggleMenu}><i class="fa-solid fa-bars"></i></button>
        </section>
        
      </div>
    </div>
  )
}

export default Navbar