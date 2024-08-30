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
          <p className="m-0">32000 Northwestern Hwy Ste. 250</p>
          <p className="m-0">Farmington Hills, MI 48334</p>
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
