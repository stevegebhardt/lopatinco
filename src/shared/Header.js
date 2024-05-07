import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <div>
          <img
            src="/lopatinco.jpeg"
            alt="Lopatin & Co logo"
            className="logo"
          ></img>
        </div>
        <div>
          <ul className="navbar">
            <Link className="nav-link" to="/">
              <li className="nav-item">
                <h4 className="p5">Home</h4>
              </li>
            </Link>
            <Link className="nav-link" to="/photos">
              <li className="nav-item">
                <h4 className="p5">Photos</h4>
              </li>
            </Link>
            <Link className="nav-link" to="/about">
              <li className="nav-item">
                <h4 className="p5">About</h4>
              </li>
            </Link>
            <Link className="nav-link" to="/forsale">
              <li className="nav-item">
                <h4 className="p5">For Sale or Lease</h4>
              </li>
            </Link>
            <Link className="nav-link" to="/contact">
              <li className="nav-item">
                <h4 className="p5">Contact</h4>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
