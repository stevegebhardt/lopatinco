import React from "react";
import Header from "../shared/Header";

export default function Contact() {
  return (
    // mailto form
    <>
      <div>
        <Header />
      </div>
      <div>
        <form
          action="mailto:gebhardt.steven3@gmail.com"
          method="get"
          enctype="text/plain"
        >
          Subject:
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
          ></textarea>
          <br />
          <input type="submit" value="Send"></input>
        </form>
      </div>
    </>
  );
}
