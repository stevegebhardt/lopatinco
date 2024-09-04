import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

export default function Generational() {
  return (
    <>
      <div>
        <header>
          <Header />
        </header>
        <main>
          <section>
            <div>
              <img></img>
              <p></p>
            </div>
          </section>
          <section>
            <div className="flex-row-center w-20 m-1">
              <img
                src="/mark.jpg"
                alt="Mark LoPatin"
                className="headshot"
              ></img>
              <p>Mark LoPatin</p>
            </div>
          </section>
          <section></section>
          <section></section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
