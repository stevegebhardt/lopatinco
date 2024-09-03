import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

export default function Home() {
  return (
    <>
      <div className="homeSectionTop">
        <div>
          <header>
            <Header />
          </header>
          <section>
            <h1>Creative Real Estate Developers</h1>
          </section>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
