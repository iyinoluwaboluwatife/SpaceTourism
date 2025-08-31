import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <img className="logo" src={logo} alt="logo" />

      <div className="line"></div>

      {/* Desktop Nav */}
      <nav className="desktop-nav">
        <ul>
          <li>
            <NavLink to="/" end>
              <b>00</b> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination">
              <b>01</b> Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew">
              <b>02</b> Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology">
              <b>03</b> Technology
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Hamburger Button */}
      <button
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Nav */}
      <nav className={`mobile-nav ${open ? "show" : ""}`}>
        <button className="close" onClick={() => setOpen(false)}>
          
        </button>
        <ul>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/" end>
              <b>00</b> Home
            </NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/destination">
              <b>01</b> Destination
            </NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/crew">
              <b>02</b> Crew
            </NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink to="/technology">
              <b>03</b> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
