import React from "react"
import "./NavBar.css"
import CartIcon from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav className="nav">
      <div className="inicio">
      <NavLink to="/">
      <img className="logo" src="/assets/img/logo.png" alt="logo" />
      </NavLink>
      {/* <NavLink className="nav-link" to="/">
      Inicio
      </NavLink> */}
      </div>
      <div className="bar">
        <NavLink activeClassName="nav-link-active" className="nav-link" to="/productos">
          Productos
        </NavLink>
        <NavLink className="nav-link" activeClassName="nav-link-active" to="/contacto">
          Contacto
        </NavLink>
      </div>
      <NavLink activeClassName="nav-link-active" className="cart-widget" to="/cart">
        <CartIcon />
      </NavLink>
    </nav>
  )
}

export default NavBar
