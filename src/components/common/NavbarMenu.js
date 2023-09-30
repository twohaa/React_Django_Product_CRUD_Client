import React from "react";
import { NavLink } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="navbar-nav">
                <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/showproducts" className="nav-link">Products</NavLink></li>
                <li className="nav-item"><NavLink to="/addProduct" className="nav-link">Add Products</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMenu;
