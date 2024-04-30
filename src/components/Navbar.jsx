import React from "react";
import { NavLink } from "react-router-dom";
// import ShoppingCart from './ShoppingCart';

function Navbar({ cartItems }) {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-title">Shopping Time</div>

        <ul className="navbar-menu">
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shoes</a>
          </li>
          <li>
            <a href="#">Watches</a>
          </li>
          <li>
            <a href="#">Dresses</a>
          </li>
          <div className="cart-icon">
            <NavLink
              to="/ShoppingCart"
              className="nav-link"
              activeClassName="active"
            >
              {" "}
              <img
                src="https://t3.ftcdn.net/jpg/03/14/84/68/360_F_314846831_5jJsC7Us9obgwMjRDqFhs04dodzvnZvi.jpg"
                alt="Cart Icon"
              />{" "}
            </NavLink>
            <span className="cart-count">{cartItems}</span>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
