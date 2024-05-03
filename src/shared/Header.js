import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <ul className="navbar">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <h4>Home</h4>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/photos">
            <h4>Photos Us</h4>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/properties">
            <h4>Properties Us</h4>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/forsale">
            <h4>For Sale or Lease</h4>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            <h4>Contact</h4>
          </Link>
        </li>
      </ul>
    </>
  );
}
