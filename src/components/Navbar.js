import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from '../logo.svg';
export class Navbar extends Component {
  render() {
    return (
<nav className="navbar navbar-expand-md navbar-dark bg-primary">
  <Link to="/">
      <img src={logo} alt="logo"/>
  </Link>
<ul className="navbar-nav align-item-center">
  <li className="nav-item ml-5">
    <Link to="/" className="nav-link">
      Product
    </Link>
  </li>
</ul>
<Link to="/cart" className="ml-auto">
  <button name="" id="" className="btn btn-primary">
  <span className="mr-2">
  <i className="fa fa-cart-plus"></i>
  </span>
        My Cart
  </button>
</Link>
</nav>

  
    );
  }
}

export default Navbar;
