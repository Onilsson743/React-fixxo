import React from 'react'
import { NavLink } from 'react-router-dom'

const IconLinks = ({link, icon, number, id}) => {
  return (
    <NavLink className="icon-links" id={id} to={link} end>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {number}
        </span>
        <i className={icon}></i>
    </NavLink>
  )
}

export default IconLinks