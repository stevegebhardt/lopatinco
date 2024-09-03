import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

export default function Contact() {
  return (
    // mailto form
    <>
      <div className="contactSectionTop">
        <div>
          <div>
            <Header />
          </div>
          <div className="flex-row-center">
            <div className="card">
              <div>
                <img
                  src="wile_coyote.jpg"
                  alt="Mark Lopatin"
                  className="headshot"
                ></img>
              </div>
              <form
                action="mailto:mlopatin@lopatinco.com"
                method="get"
                enctype="text/plain"
              >
                <br />
                <input type="submit" value="Contact Mark Lopatin"></input>
              </form>
            </div>
            <div className="card">
              <div>
                <img
                  src="Marvin_the_Martian.png"
                  alt="Jonathan Lopatin"
                  className="headshot"
                ></img>
              </div>
              <form
                action="mailto:jlopatin@lopatinco.com"
                method="get"
                enctype="text/plain"
              >
                <br />
                <input type="submit" value="Contact Jonathan Lopatin"></input>
              </form>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
