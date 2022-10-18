import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../images/logo.svg'
import IconLinks from './SmallComponents/IconLinks'



const Navbar = () => {
  return (
    <div className='top-navbar'>
      <div className='_container _navbar'>
        <section className='logo'>
          <img src={Logo} />
        </section>
        <section className='navbar-menu'>
          <NavLink className='navbar-link' to='/' end>Home</NavLink>
          <NavLink className='navbar-link' to='/Categories' end>Categories</NavLink>
          <NavLink className='navbar-link' to='/Products' end>Products</NavLink>
          <NavLink className='navbar-link' to='/contacts' end>Contacts</NavLink>
        </section>
        <section className='navbar-icons'>
          <IconLinks link = "/serch" icon = "fa-regular fa-magnifying-glass" />
          <IconLinks link = "/serch" icon = "fa-regular fa-arrows-repeat" />
          <IconLinks link = "/serch" icon = "fa-regular fa-heart" number={"10"} />
          <IconLinks link = "/serch" icon = "fa-regular fa-bag-shopping" number={"99+"} />
          </section>
      </div>
    </div>
  )
}

export default Navbar