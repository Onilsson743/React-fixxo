import React from 'react'
import Logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <div className='top-navbar'>
      <div className='_container _navbar'>
        <section className='logo'>
          <img src={Logo} />
        </section>
        <section className='navbar-menu'>
          <a>Home</a>
          <a>Categories</a>
          <a>Products</a>
          <a>Contacts</a>
        </section>
        <section className='navbar-icons'>
          <a className="icon-links" href="#"><i className="fa-regular fa-magnifying-glass"></i></a>
          <a className="icon-links" href="#"><i className="fa-regular fa-arrows-repeat"></i></a>
          <a className="icon-links" href="#"><i className="fa-regular fa-heart"></i></a>
          <a className="icon-links" href="#"><i className="fa-regular fa-bag-shopping"></i></a>
        </section>
      </div>
    </div>
  )
}

export default Navbar