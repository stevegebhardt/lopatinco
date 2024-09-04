import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerBox m-1">
          <p className="m-0">
            <strong>LoPatin & Co</strong>
          </p>
          <p className="m-0">25865 West 12 Mile Road</p>
          <p className="m-0">Suite 100, Southfield, MI 48034</p>
        </div>
        <div className="footerBox m-1">
          <Link className="nav-link footerBox">
            <h4 className="m-0">Terms & Conditions</h4>
          </Link>
          <Link className="nav-link footerBox">
            <h4 className="m-0">Privacy Policy</h4>
          </Link>
        </div>
      </div>
    </>
  );
}
