import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      document.querySelector(".Navbar").style.boxShadow = "2px 2px 6px green";
    } else {
      document.querySelector(".Navbar").style.boxShadow = "none";
    }
  });

  return (
    <>
      <div className="Navbar">
        <nav>
          <div className="logo">
          <i class="fa-solid fa-bars"></i>
          <NavLink to='/'>
          <img
              src="https://png.pngtree.com/png-clipart/20200720/original/pngtree-fresh-food-logo-png-image_4774188.jpg"
              alt="logo"
            />
          </NavLink>
            
          </div>
          <ul className="list">
            <li>
              <NavLink to="/" className="navitem">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/orderonline" className="navitem">
                Order online
              </NavLink>
            </li>
            <li>
              <NavLink to="/storelocator" className="navitem">
                Store locator
              </NavLink>
            </li>
            <li>
              <NavLink to="/franchise" className="navitem">
                Franchise Enquiry
              </NavLink>
            </li>
            <li>
              <NavLink to="/story" className="navitem">
                Our story
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="navitem">
                Contact us
              </NavLink>
            </li>
          </ul>
          <div className="right">
            <i className="fa-solid fa-user right-item"></i>
            <i className="fa-solid fa-magnifying-glass right-item"></i>
            <NavLink to="/login">
            <button className="right-item btn-login">Login</button>
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
