import React from "react";
import Header from "../shared/Header";

export default function Contact() {
  return (
    // mailto form
    <>
      <div className="contactSectionTop">
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
              action="mailto:mlopatin88@aol.com"
              method="get"
              enctype="text/plain"
            >
              {/* Subject:
              <br />
              <input type="text" name="subject" placeholder="Your Name"></input>
              <br />
              Email:
              <br />
              <input type="email" name="email" placeholder="Your Email"></input>
              <br />
              Message:
              <br />
              <textarea
                name="body"
                rows="5"
                cols="30"
                placeholder="Your Message"
              ></textarea> */}
              <br />
              <input type="submit" value="Send an Email to Mark"></input>
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
              {/* Subject:
              <br />
              <input type="text" name="subject" placeholder="Your Name"></input>
              <br />
              Email:
              <br />
              <input type="email" name="email" placeholder="Your Email"></input>
              <br />
              Message:
              <br />
              <textarea
                name="body"
                rows="5"
                cols="30"
                placeholder="Your Message"
              ></textarea> */}
              <br />
              <input type="submit" value="Send an Email to Jonathan"></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
